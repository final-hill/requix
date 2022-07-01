/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../../AgentStyle';
import htmlFactory from '../../htmlFactory';
import DisplayStackPresentation from '../display-stack/Presentation';
import TabPosition from './TabPosition';

class TabNavigatorPresentation extends DisplayStackPresentation {
    override elRoot = htmlFactory.article({ classList: ['tab-navigator', 'tab-position_left'] });
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
    override get styleRules(): AgentStyle {
        return {
            ...super.styleRules,
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

export default TabNavigatorPresentation;