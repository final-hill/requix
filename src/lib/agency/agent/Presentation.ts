/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import html from '../agents/htmlFactory';
import Observable from '../Observable';

export default class Presentation extends Observable {
    elRootType!: HTMLElement;
    #elRoot: this['elRootType'];
    #styleRules: string[] = [];

    constructor() {
        super();
        this.#styleRules = this.initStyle();
        this.#elRoot = this.initRoot();
    }

    override get eventTarget(): this['elRootType'] {
        return this.#elRoot;
    }

    get defaultSlot() { return this.elRoot; }

    get elRoot(): this['elRootType'] { return this.#elRoot; }

    get styleRules() { return [...this.#styleRules]; }

    initStyle(): string[] {
        return [];
    }

    notifyChange<K extends keyof this, V extends this[K]>(fieldName: K, newValue: V) {
        this.eventTarget.dispatchEvent(
            new CustomEvent('presentationChange', {
                detail: { [fieldName]: newValue }
            })
        );
    }

    initRoot() {
        return html.article();
    }

    addChild(presentation: Presentation) {
        this.defaultSlot.appendChild(presentation.elRoot);
    }

    removeChild(presentation: Presentation) {
        this.defaultSlot.removeChild(presentation.elRoot);
    }
}