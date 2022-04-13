/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import TabNavigatorPresentation from './TabNavigatorPresentation';
import TabBarControl from './tab-bar/TabBarControl';
import DisplayStackControl, { DisplayStackControlOptions } from '../display-stack/DisplayStackControl';
import TabControl from './tab/TabControl';
import TabPosition from './TabPosition';
import TabOrientation from './tab-bar/TabOrientation';

export interface TabNavigatorControlOptions extends DisplayStackControlOptions {
    tabPosition?: TabPosition;
}

export default class TabNavigatorControl extends DisplayStackControl {
    static override readonly styleId: string = 'TabNavigatorControl';

    override readonly presentationType!: TabNavigatorPresentation;

    private _tabPosition!: TabPosition;
    private _displayStack!: DisplayStackControl;
    private _tabBar!: TabBarControl;

    constructor(options: TabNavigatorControlOptions = {}) { super(options); }

    get tabPosition() {
        return this._tabPosition;
    }

    set tabPosition(value: TabPosition) {
        this._tabPosition = this.presentation!.tabPosition = value;
        const positionOrientation = {
            [TabPosition.Bottom]: TabOrientation.Horizontal,
            [TabPosition.Left]: TabOrientation.Vertical,
            [TabPosition.Right]: TabOrientation.Vertical,
            [TabPosition.Top]: TabOrientation.Horizontal
        };

        this._tabBar.tabOrientation = positionOrientation[value];
    }

    override get children(): readonly this['childType'][] {
        return this._displayStack.children;
    }

    override set selectedIndex(value: number) {
        this._tabBar.selectedIndex = value;
        this._displayStack.selectedIndex = value;
    }

    override appendChild(child: this['childType']): void {
        this._tabBar.appendChild(new TabControl({ icon: child.icon, label: child.label }));
        this._displayStack.appendChild(child);
    }

    override init(options: TabNavigatorControlOptions) {
        super.init(options);
        this._tabPosition = options.tabPosition ?? TabPosition.Top;
        this._tabBar = new TabBarControl();
        this._displayStack = new DisplayStackControl();
    }

    override initPresentation(): this['presentationType'] {
        return new TabNavigatorPresentation({
            tabPosition: this._tabPosition
        });
    }

    override onAttached() {
        super.onAttached();
        super.appendChild(this._tabBar);
        this._tabBar.isHidden = false;
        super.appendChild(this._displayStack);
        this._displayStack.isHidden = false;
        this.tabPosition = this._tabPosition;
    }

    override prependChild(child: this['childType']): void {
        this._tabBar.prependChild(new TabControl({ icon: child.icon, label: child.label }));
        this._displayStack.prependChild(child);
    }

    override removeChild(child: this['childType']): void {
        this.selectedIndex = -1;
        const tabIndex = this._displayStack.children.indexOf(child),
            tab = this._tabBar.children[tabIndex];
        tab.remove();
        child.remove();
    }
}