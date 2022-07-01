/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import htmlFactory from './htmlFactory';
import { kebab } from './util';

type StyleRule = Partial<CSSStyleDeclaration | { [key: string]: string }>;

class StyleManager {
    #sheet: CSSStyleSheet;
    #ruleRefCount: Map<string, number> = new Map();

    constructor() {
        this.#sheet = ((
            document.getElementById('agency')
            ?? document.head.appendChild(htmlFactory.style({ id: 'agency' }))) as HTMLStyleElement
        ).sheet!;
    }

    addRule(selector: string, body: StyleRule): void {
        // If the rule has never been added to the style sheet
        if (this.#ruleRefCount.get(selector) == 0) {
            const kvs = Object.entries(body)
                .map(([key, value]) => `${kebab(key)}: ${value};`);
            this.#sheet.insertRule(`${selector} {${kvs.join('')}}`);
        }

        // increment the ref count
        this.#ruleRefCount.set(
            selector,
            (this.#ruleRefCount.get(selector) ?? 0) + 1
        );
    }
    getSelectorIndex(selector: string): number {
        // TypeSript bug? cssRules have selectorText but the type does not have this declared
        return [...this.#sheet.cssRules].findIndex(rule => (rule as CSSStyleRule).selectorText == selector);
    }
    removeRule(selector: string): void {
        // decrement the ref count
        this.#ruleRefCount.set(
            selector,
            (this.#ruleRefCount.get(selector) ?? 0) - 1
        );
        // If all of the references have been removed
        if (this.#ruleRefCount.get(selector) == 0) {
            const index = this.getSelectorIndex(selector);
            this.#sheet.deleteRule(index);
        }
    }
}

export default StyleManager;