/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import PanelControl from '../../../lib/agency/agents/panel/PanelControl';
import PagePresentation from './PagePresentation';

export default class PageControl extends PanelControl {
    override initPresentation(): this['presentationType'] {
        return new PagePresentation();
    }
}