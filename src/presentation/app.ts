/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ApplicationControl from '../lib/agency/agents/application/ApplicationControl';
import TabPosition from '../lib/agency/agents/tab-navigator/TabPosition';
import basic from './theme/basic';
import home from './screens/home';
import projects from './screens/projects';
import GlobalNavControl from './agents/GlobalNav/GlobalNavControl';

const app = new ApplicationControl({
    navLabel: 'Requix',
    theme: basic,
    // TODO: implement lazy loading
    children: [
        new GlobalNavControl({
            selectedIndex: 0,
            tabPosition: TabPosition.Left,
            children: [home, projects]
        })
    ]
});