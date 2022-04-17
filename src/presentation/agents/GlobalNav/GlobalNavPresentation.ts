/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import TabNavigatorPresentation from '../../../lib/agency/agents/tab-navigator/TabNavigatorPresentation';
import AgentStyle from '../../../lib/agency/AgentStyle';

export default class GlobalNavPresentation extends TabNavigatorPresentation {
    override initDom(): this['elRootType'] {
        const article = super.initDom();
        article.classList.add('global-nav');

        return article;
    }

    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
            '.global-nav': {
                background: 'linear-gradient(to right, var(--palette1), var(--palette1), var(--palette1-1))',
                borderRight: '1px outset',
                height: '100%'
            },
            '.global-nav .tab': {
                color: 'var(--font-primary)',
                height: '0.5in',
                lineHeight: '0.5in',
                paddingLeft: '0.2in',
                textDecoration: 'none'
            }
        };
    }
}