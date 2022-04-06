/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import FeatherIconControl from '../../../feather-icon/FeatherIconControl';
import FeatherIconName from '../../../feather-icon/FeatherIconName';
import ContainerControl, { ContainerControlOptions } from '../../container/ContainerControl';
import TextSpanControl from '../../text-span/TextSpanControl';
import TabPresentation from './TabPresentation';

export interface TabControlOptions extends ContainerControlOptions {
    isActive?: boolean;
}

export default class TabControl extends ContainerControl {
    static override readonly styleId: string = 'TabControl';

    override readonly presentationType!: TabPresentation;

    private _iconControl!: FeatherIconControl;
    private _isActive!: boolean;
    private _labelControl!: TextSpanControl;

    constructor(options: TabControlOptions = {}) { super(options); }

    override set icon(value: FeatherIconName | undefined) {
        super.icon = value;
        this._iconControl.isHidden = value == undefined;
        this._iconControl.icon = value ?? FeatherIconName.xCircle;
    }

    get isActive() {
        return this.presentation!.isActive;
    }
    set isActive(value: boolean) {
        this.presentation!.isActive = value;
    }

    override set label(value: string) {
        super.label = value;
        this._labelControl.text = value;
    }

    override init(options: TabControlOptions) {
        super.init(options);
        this._iconControl = new FeatherIconControl({ icon: options.icon ?? FeatherIconName.xCircle });
        this._iconControl.isHidden = options.icon == undefined;
        this._labelControl = new TextSpanControl({ text: options.label ?? '' });
        this._labelControl.isHidden = options.label == undefined;
        this._isActive = options.isActive ?? false;
    }

    override initPresentation(): this['presentationType'] {
        return new TabPresentation();
    }

    override onAttached(): void {
        super.onAttached();
        this.appendChild(this._iconControl);
        this.appendChild(this._labelControl);
        this.isActive = this._isActive ?? false;
    }
}