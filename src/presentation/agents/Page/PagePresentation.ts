/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import PanelPresentation from '../../../lib/agency/agents/panel/PanelPresentation';
import AgentStyle from '../../../lib/agency/AgentStyle';

export default class PagePresentation extends PanelPresentation {
    override initDom(): this['elRootType'] {
        const el = super.initDom();
        el.classList.add('page');

        return el;
    }

    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
            '.page': {
                color: 'var(--font-primary)'
            }
        };
    }
}