/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../../../AgentStyle';
import htmlFactory from '../../../htmlFactory';
import ContainerPresentation from '../../container/ContainerPresentation';
import TabOrientation from './TabOrientation';

export default class TabBarPresentation extends ContainerPresentation {
    override readonly elRootType!: HTMLElement;

    get tabOrientation(): TabOrientation {
        const clsName = this.elRoot.className.match(/tab-bar_\w+/)![0];

        return clsName as TabOrientation;
    }
    set tabOrientation(value: TabOrientation) {
        const clsName = this.elRoot.className.match(/tab-bar_\w+/);
        if (clsName) {
            this.elRoot.classList.remove(clsName[0]);
        }
        this.elRoot.classList.add(value);
    }

    override initDom(): HTMLElement {
        return htmlFactory.nav({ className: 'tab-bar' });
    }

    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
            '.tab-bar': {
                display: 'flex'
            },
            '.tab-bar_horizontal': {
                flexDirection: 'row'
            },
            '.tab-bar_vertical': {
                flexDirection: 'column'
            }
        };
    }
}