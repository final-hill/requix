/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../AgentStyle';

export default abstract class Presentation {
    readonly elRootType!: HTMLElement | SVGElement;

    private _styleRules: AgentStyle = this.initStyle();
    private _elRoot = this.initDom();
    private _isAttached = false;

    get elRoot(): this['elRootType'] { return this._elRoot; }

    get isAttached() { return this._isAttached; }

    get isHidden(): boolean {
        return this._elRoot.classList.contains('is-hidden');
    }

    set isHidden(value: boolean) {
        this._elRoot.classList.toggle('is-hidden', value);
    }

    get styleRules() { return this._styleRules; }

    abstract initDom(): this['elRootType'];

    initStyle(): AgentStyle {
        return {
            '.is-hidden': {
                display: 'none'
            }
        };
    }

    onAttached() { this._isAttached = true; }

    onDetached() { this._isAttached = false; }

    remove() { this._elRoot.remove(); }
}