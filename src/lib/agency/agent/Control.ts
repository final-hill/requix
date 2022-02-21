/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Repository from '../IRepository';
import Observer from '../Observer';
import Presentation from './Presentation';

export default class Control<P extends Presentation = Presentation> extends Observer {
    #presentation: P;
    #abstraction?: Repository<any>;
    #parent?: Control;
    #children: Control[] = [];
    #isLoaded = false;

    constructor() {
        super();
        this.#presentation = this.initPresentation();
        this.#abstraction = this.initAbstraction();
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

    addChild(child: Control<Presentation>) {
        child.remove();
        child.#parent = this;
        this.#children.push(child);
        this.presentation.addChild(child.presentation);
        child.onAttached();
    }

    async load() {
        this.#isLoaded = true;
    }

    onAttached() {
        this.load();
    }

    onRemoved() {
        this.unload();
    }

    remove() {
        this.parent?.removeChild(this);
    }

    removeChild(child: Control) {
        child.#parent = undefined;
        this.#children = this.#children.filter(c => c !== child);
        this.presentation.removeChild(child.presentation);
        child.onRemoved();
    }

    render(): Element | undefined {
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

    initAbstraction(): this['abstraction'] { return undefined; }

    initPresentation(): P {
        return new Presentation() as P;
    }
}