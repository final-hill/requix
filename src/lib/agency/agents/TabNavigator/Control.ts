/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import TabBar from '../TabBar/Control';
import DisplayStack, { DisplayStackOptions } from '../display-stack/Control';
import Tab from '../Tab/Control';
import TabPosition from './TabPosition';
import TabOrientation from '../TabBar/TabOrientation';
import TabNavigatorPresentation from './Presentation';
import Container from '../container/Control';

export interface TabNavigatorOptions extends DisplayStackOptions {
    tabPosition?: TabPosition;
}

class TabNavigator extends DisplayStack {
    #displayStack = new DisplayStack();
    override presentation = new TabNavigatorPresentation();
    #tabBar = new TabBar();

    constructor(options: TabNavigatorOptions = {}) {
        super(options);
        this.tabPosition = options.tabPosition ?? TabPosition.Top;
    }

    override get children() {
        return this.#displayStack.children;
    }
    override get selectedIndex() {
        return this.#tabBar.selectedIndex;
    }
    override set selectedIndex(value) {
        this.#tabBar.selectedIndex = value;
        this.#displayStack.selectedIndex = value;
    }
    get tabPosition(): TabPosition {
        return this.presentation.tabPosition;
    }
    set tabPosition(value: TabPosition) {
        this.presentation.tabPosition = value;
        const positionOrientation = {
            [TabPosition.Bottom]: TabOrientation.Horizontal,
            [TabPosition.Left]: TabOrientation.Vertical,
            [TabPosition.Right]: TabOrientation.Vertical,
            [TabPosition.Top]: TabOrientation.Horizontal
        };

        this.#tabBar.tabOrientation = positionOrientation[value];
    }
    override appendChild(child: Container) {
        this.#tabBar.appendChild(new Tab({
            icon: child.navIcon,
            label: child.navLabel
        }));
        this.#displayStack.appendChild(child);
    }
    override onAttached() {
        super.onAttached();
        if (this.#tabBar.parent != this) {
            super.appendChild(this.#tabBar);
        }
        if (this.#displayStack.parent != this) {
            super.appendChild(this.#displayStack);
        }
    }
    override prependChild(child: Container) {
        this.#tabBar.prependChild(new Tab({ icon: child.navIcon, label: child.navLabel }));
        this.#displayStack.prependChild(child);
    }
    override removeChild(child: Container) {
        this.selectedIndex = -1;
        const tabIndex = this.#displayStack.children.indexOf(child),
            tab = this.#tabBar.children[tabIndex];
        tab.remove();
        child.remove();
    }
}

export default TabNavigator;