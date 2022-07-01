/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Control from '../../agent/Control';
import Container, { ContainerOptions } from '../container/Control';
import Tab from '../Tab/Control';
import TabBarPresentation from './Presentation';
import TabOrientation from './TabOrientation';

export interface TabBarOptions extends ContainerOptions { }

class TabBar extends Container {
    #selectedIndex = -1;
    #selectedTab?: Tab;

    override presentation = new TabBarPresentation();

    constructor(options: TabBarOptions = {}) {
        super(options);
    }

    get selectedIndex() {
        return this.#selectedIndex;
    }
    set selectedIndex(value) {
        if (this.#selectedTab) {
            this.#selectedTab.isActive = false;
        }

        this.#selectedIndex = value;
        // FIXME: eliminate cast
        this.#selectedTab = this.children[this.selectedIndex] as Tab;

        if (this.#selectedTab) {
            this.#selectedTab.isActive = true;
        }
    }

    get tabOrientation(): TabOrientation {
        return this.presentation.tabOrientation;
    }
    set tabOrientation(value: TabOrientation) {
        this.presentation.tabOrientation = value;
    }

    override removeChild(child: Control) {
        this.selectedIndex = -1;
        super.removeChild(child);
    }
}

export default TabBar;