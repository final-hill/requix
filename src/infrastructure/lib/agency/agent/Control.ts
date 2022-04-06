/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ContainerControl from '../agents/container/ContainerControl';
import htmlFactory from '../htmlFactory';
import Abstraction from './Abstraction';
import Presentation from './Presentation';

/**
 * The initialization options for the control
 */
export interface ControlOptions { }

/**
 * @see <https://en.wikipedia.org/wiki/Adapter_pattern>
 * @see <https://en.wikipedia.org/wiki/Mediator_pattern>
 *
 */
export default abstract class Control {
    static readonly styleId: string = 'Control';

    readonly presentationType!: Presentation;
    readonly abstractionType!: Abstraction;

    private _abstraction?: this['abstractionType'];
    private _presentation?: this['presentationType'];
    private _parent?: ContainerControl;
    private _isAttached = false;

    /**
     * Initializes the Control by initializing its facets.
     * This occurs in the following order:
     * 1. init(options)
     * 2. initAbstraction()
     * 3. initPresentation()
     *
     * @param {ControlOptions} [options] the initialization options
     */
    constructor(options: ControlOptions = {}) {
        this.init(options);
        this._abstraction = this.initAbstraction();
        this._presentation = this.initPresentation();
    }

    /**
     * The {@link Abstraction} facet
     */
    get abstraction() { return this._abstraction; }

    get hasParent() { return this._parent != undefined; }

    get isAttached() { return this._isAttached; }

    get isHidden(): boolean {
        return this._presentation?.isHidden ?? true;
    }

    set isHidden(value: boolean) {
        if (this._presentation) {
            this._presentation.isHidden = value;
        }
    }

    /**
     * The {@link ContainerControl} which owns this {@link Control}
     */
    get parent() { return this._parent; }
    set parent(value) {
        this._isAttached = value != undefined;
        this._parent = value;
    }

    /**
     * The {@link Presentation} facet
     */
    get presentation() { return this._presentation; }

    /**
     * To support the Template Method pattern, the constructor options
     * are passed to this method before any other initialization to provide
     * a means for the subclass to save and act upon the options before
     * other overridden methods attempts to access them
     *
     * @param {ControlOptions} options The initialization options from the constructor
     */
    abstract init(options: ControlOptions): void;

    /**
     * Initializes the {@link Abstraction} Facet
     *
     * @returns {Abstraction?} The new Abstraction
     */
    initAbstraction(): this['abstractionType'] | undefined { return undefined; }

    /**
     * Initializes the {@link Presentation} Facet
     *
     * @returns {Presentation} The new Presentation
     */
    initPresentation(): this['presentationType'] | undefined { return undefined; }

    attachStyles() {
        if (this.presentation) {
            const kebab = (text: string) =>
                text.replace(
                    /[a-z][A-Z]/g,
                    ($0: string) => `${$0[0]}-${$0[1].toLowerCase()}`
                ),
                { styleRules } = this.presentation,
                ruleList = Object.entries(styleRules).map(([selector, body]) =>
                    `${selector} {
                        ${Object.entries(body).map(([key, value]) => `${kebab(key)}: ${value};`).join('\r\n')}
                    }`
                ),
                styleId: string = Reflect.get(this.constructor, 'styleId'),
                style = document.getElementById(styleId) as HTMLStyleElement ??
                    document.head.appendChild(htmlFactory.style({ id: styleId }));
            ruleList.forEach(rule => {
                style.sheet!.insertRule(rule);
            });
            // To make the rules visible in the DOM inspector
            style.textContent = ruleList.join('\r\n');
        }
    }

    detachStyles() {
        if (this.presentation) {
            this.presentation.remove();
            const styleId: string = Reflect.get(this.constructor, 'styleId'),
                style = document.getElementById(styleId);
            style?.remove();
        }
    }

    onAttached() {
        this._abstraction?.onAttached();
        this._presentation?.onAttached();
        this.attachStyles();
    }

    onDetached() {
        this._abstraction?.onDetached();
        this._presentation?.onDetached();
        this.detachStyles();
    }

    remove() {
        this.parent?.removeChild(this);
    }
}