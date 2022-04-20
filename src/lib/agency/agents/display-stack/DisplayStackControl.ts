/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ContainerControl, { ContainerControlOptions } from '../container/ContainerControl';
import DisplayStackPresentation from './DisplayStackPresentation';

export interface DisplayStackControlOptions extends ContainerControlOptions {
    selectedIndex?: number;
}

export default class DisplayStackControl extends ContainerControl {
    static override readonly styleId: string = 'DisplayStackControl';

    override readonly childType!: ContainerControl;
    override readonly presentationType!: DisplayStackPresentation;

    private _selectedIndex!: number;

    constructor(options: DisplayStackControlOptions = {}) { super(options); }

    get selectedControl(): this['childType'] | undefined {
        return this.children[this._selectedIndex];
    }

    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(value) {
        this.children.forEach(child => child.isHidden = true);
        this._selectedIndex = value;
        if (this.selectedControl) {
            this.selectedControl.isHidden = false;
        }
    }

    override appendChild(child: this['childType']) {
        child.isHidden = true;
        super.appendChild(child);
    }

    override init(options: DisplayStackControlOptions): void {
        super.init(options);
        this._selectedIndex = options.selectedIndex ?? -1;
    }

    override initPresentation(): this['presentationType'] {
        return new DisplayStackPresentation();
    }

    override onAttached(): void {
        super.onAttached();
        this.selectedIndex = this._selectedIndex;
    }

    override removeChild(child: this['childType']): void {
        super.removeChild(child);
        child.isHidden = false;
    }
}