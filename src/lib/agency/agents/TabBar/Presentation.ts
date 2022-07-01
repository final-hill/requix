/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import htmlFactory from '../../htmlFactory';
import ContainerPresentation from '../container/Presentation';
import TabOrientation from './TabOrientation';

class TabBarPresentation extends ContainerPresentation {
    override elRoot = htmlFactory.nav({ classList: ['tab-bar'] });
    override get styleRules() {
        return {
            ...super.styleRules,
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
}

export default TabBarPresentation;