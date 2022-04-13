/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../../AgentStyle';
import htmlFactory from '../../htmlFactory';
import DisplayStackPresentation from '../display-stack/DisplayStackPresentation';
import TabPosition from './TabPosition';

export interface TabNavigatorPresentationOptions {
    tabPosition: TabPosition;
}

export default class TabNavigatorPresentation extends DisplayStackPresentation {
    override readonly elRootType!: HTMLElement;

    get tabPosition(): TabPosition {
        const clsName = this.elRoot.className.match(/tab-position_\w+/)![0];

        return clsName as TabPosition;
    }

    set tabPosition(value: TabPosition) {
        const clsName = this.elRoot.className.match(/tab-position_\w+/);
        if (clsName) {
            this.elRoot.classList.remove(clsName[0]);
        }
        this.elRoot.classList.add(value);
    }

    constructor(options: TabNavigatorPresentationOptions) {
        super();
        this.tabPosition = options.tabPosition;
    }

    override initDom(): this['elRootType'] {
        const { article } = htmlFactory;

        return article({ className: 'tab-navigator' });
    }

    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
            '.tab-navigator': {
                boxSizing: 'border-box',
                display: 'flex'
            },
            '.tab-position_left': {
                flexDirection: 'row'
            },
            '.tab-position_right': {
                flexDirection: 'row-reverse'
            },
            '.tab-position_top': {
                flexDirection: 'column'
            },
            '.tab-position_bottom': {
                flexDirection: 'column-reverse'
            }
        };
    }
}