/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Control from '../agent/Control';
import FeatherIconName from './FeatherIconName';
import FeatherIconPresentation from './FeatherIconPresentation';

export interface FeatherIconControlOptions {
    icon: FeatherIconName;
}

export default class FeatherIconControl extends Control {
    static override readonly styleId: string = 'FeatherIconControl';

    override readonly presentationType!: FeatherIconPresentation;

    private _icon!: FeatherIconName;

    constructor(options: FeatherIconControlOptions) { super(options); }

    get icon() { return this.presentation!.icon; }

    set icon(value: FeatherIconName) { this.presentation!.icon = value; }

    override init(options: FeatherIconControlOptions) {
        this._icon = options.icon;
    }

    override initPresentation(): this['presentationType'] {
        return new FeatherIconPresentation();
    }

    override onAttached(): void {
        super.onAttached();
        this.icon = this._icon;
    }
}