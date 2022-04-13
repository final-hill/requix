/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ApplicationControl from '../lib/agency/agents/application/ApplicationControl';
import PanelControl from '../lib/agency/agents/panel/PanelControl';
import TabNavigatorControl from '../lib/agency/agents/tab-navigator/TabNavigatorControl';
import TabPosition from '../lib/agency/agents/tab-navigator/TabPosition';
import TextSpanControl from '../lib/agency/agents/text-span/TextSpanControl';
import FeatherIconName from '../lib/agency/feather-icon/FeatherIconName';
import basic from './theme/basic';

const app = new ApplicationControl({
    label: 'Requix',
    theme: basic,
    children: [
        new TabNavigatorControl({
            selectedIndex: 0,
            tabPosition: TabPosition.Left,
            children: [
                new PanelControl({
                    title: 'Home',
                    icon: FeatherIconName.home,
                    children: [new TextSpanControl({ text: 'HOME' })]
                }),
                new PanelControl({
                    title: 'Projects',
                    icon: FeatherIconName.briefcase,
                    children: [new TextSpanControl({ text: 'PROJECTS' })]
                })
            ]
        })
    ]
});