/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Contract, Contracted, extend, override } from '@final-hill/decorator-contracts';
import html from '../agents/htmlFactory';
import Observable, { observableContract } from '../Observable';

const presentationContract = new Contract<Presentation>({
    [extend]: observableContract,
    initRoot: {
        demands: self => self.elRoot == undefined
    }
});

@Contracted(presentationContract)
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
}