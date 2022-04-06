/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Control from '../../agent/Control';
import FeatherIconName from '../../feather-icon/FeatherIconName';
import ContainerPresentation from './ContainerPresentation';

export interface ContainerControlOptions {
    icon?: FeatherIconName;
    label?: string;
    children?: ContainerControl['childType'][];
}

export default abstract class ContainerControl extends Control {
    static override readonly styleId: string = 'ContainerControl';

    readonly childType!: Control;
    override readonly presentationType!: ContainerPresentation;

    private _children!: this['childType'][];
    private _icon?: FeatherIconName;
    private _label?: string;

    constructor(options: ContainerControlOptions = {}) { super(options); }

    get children(): readonly this['childType'][] {
        return Object.freeze([...this._children]);
    }

    get icon() { return this._icon; }
    set icon(value) { this._icon = value; }

    get label() { return this._label; }
    set label(value) { this._label = value; }

    appendChild(child: this['childType']) {
        child.remove();
        child.parent = this;
        this._children.push(child);

        if (this.presentation && child.presentation) {
            this.presentation.appendChild(child.presentation);
        }

        child.onAttached();
    }

    appendChildren(...children: this['childType'][]) {
        children.forEach(child => this.appendChild(child));
    }

    override init(options: ContainerControlOptions) {
        this._children = options.children ?? [];
        this._icon = options.icon;
        this._label = options.label;
    }

    override onAttached(): void {
        super.onAttached();
        this.icon = this._icon;
        this.label = this._label;
        const children = this._children.slice();
        this._children = [];
        this.appendChildren(...children);
    }

    prependChild(child: this['childType']) {
        child.remove();
        child.parent = this;
        this._children.unshift(child);

        if (this.presentation && child.presentation) {
            this.presentation.prependChild(child.presentation);
        }

        child.onAttached();
    }

    removeChild(child: this['childType']) {
        child.parent = undefined;
        this._children = this._children.filter(c => c !== child);

        if (this.presentation && child.presentation) {
            this.presentation.removeChild(child.presentation);
        }

        child.onDetached();
    }
}