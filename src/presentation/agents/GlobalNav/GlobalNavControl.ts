/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import TabNavigatorControl from '../../../lib/agency/agents/tab-navigator/TabNavigatorControl';
import GlobalNavPresentation from './GlobalNavPresentation';

export default class GlobalNavControl extends TabNavigatorControl {
    override initPresentation(): this['presentationType'] {
        return new GlobalNavPresentation({
            tabPosition: this.tabPosition
        });
    }
}