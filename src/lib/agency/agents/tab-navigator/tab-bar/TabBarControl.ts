/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ContainerControl, { ContainerControlOptions } from '../../container/ContainerControl';
import TabControl from '../tab/TabControl';
import TabBarPresentation from './TabBarPresentation';
import TabOrientation from './TabOrientation';

export interface TabBarControlOptions extends ContainerControlOptions {
    selectedIndex?: number;
    tabOrientation?: TabOrientation;
}

export default class TabBarControl extends ContainerControl {
    static override readonly styleId: string = 'TabBarControl';

    override readonly presentationType!: TabBarPresentation;
    override readonly childType!: TabControl;

    private _tabOrientation!: TabOrientation;
    private _selectedIndex!: number;
    private _selectedTab?: TabControl;

    constructor(options: TabBarControlOptions = {}) { super(options); }

    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(value) {
        if (this._selectedTab) {
            this._selectedTab.isActive = false;
        }

        this._selectedIndex = value;
        this._selectedTab = this.children[this.selectedIndex];

        if (this._selectedTab) {
            this._selectedTab.isActive = true;
        }
    }

    get tabOrientation() { return this._tabOrientation; }
    set tabOrientation(value: TabOrientation) {
        this._tabOrientation = value;
        this.presentation!.tabOrientation = value;
    }

    override init(options: TabBarControlOptions) {
        super.init(options);
        this._tabOrientation = options.tabOrientation ?? TabOrientation.Horizontal;
        this._selectedIndex = options.selectedIndex ?? -1;
    }

    override initPresentation(): this['presentationType'] {
        return new TabBarPresentation();
    }

    override onAttached(): void {
        super.onAttached();
        this.tabOrientation = this._tabOrientation;
        this.selectedIndex = this._selectedIndex;
    }

    override removeChild(child: this['childType']): void {
        this.selectedIndex = -1;
        super.removeChild(child);
    }
}