/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Abstraction from './Abstraction';
import Observer, { observerContract } from '../Observer';
import Presentation from './Presentation';
import { Contract, Contracted, extend } from '@final-hill/decorator-contracts';

// FIXME: This should not have to be exported
export const controlContract = new Contract<Control>({
    [extend]: observerContract,
    initAbstraction: {
        demands: self => self.abstraction == null
    },
    initPresentation: {
        demands: self => self.presentation == null
    },
    load: {
        demands: self => !self.isLoaded,
        ensures: self => self.isLoaded
    },
    unload: {
        demands: self => self.isLoaded,
        ensures: self => !self.isLoaded
    }
});

@Contracted(controlContract)
export default class Control<
    P extends Presentation = Presentation,
    A extends Abstraction = Abstraction
    > extends Observer {

    #presentation: P;
    #abstraction!: A;
    #parent?: Control;
    #children: Control[] = [];
    #isLoaded = false;

    constructor() {
        super();
        this.#presentation = this.initPresentation();
        // FIXME: this is triggering a private property error.
        // Contract related?
        //this.#abstraction = this.initAbstraction();
    }

    get children(): readonly Control[] {
        return Object.freeze([...this.#children]);
    }

    get parent() {
        return this.#parent;
    }

    get abstraction() {
        return this.#abstraction;
    }

    get presentation() {
        return this.#presentation;
    }

    get hasParent() {
        return this.#parent != undefined;
    }

    get isLoaded() {
        return this.#isLoaded;
    }

    addChild(child: Control) {
        child.remove();
        child.#parent = this;
        this.#children.push(child);
    }

    async load() {
        this.#isLoaded = true;
    }

    remove() {
        this.parent?.removeChild(this);
    }

    removeChild(child: Control) {
        child.#parent = undefined;
        this.#children = this.#children.filter(c => c !== child);
    }

    render(): HTMLElement | undefined {
        const elContainer = this.#presentation.initRoot();
        this.#children.forEach(child => {
            const elChild = child.render();
            if (elChild) { elContainer?.appendChild(elChild); }
        });

        return elContainer;
    }

    async unload() {
        this.#isLoaded = false;
    }

    initAbstraction(): A {
        return new Abstraction() as A;
    }

    initPresentation(): P {
        return new Presentation() as P;
    }
}