/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../../AgentStyle';
import htmlFactory from '../../htmlFactory';
import ContainerPresentation from '../container/ContainerPresentation';

export default class DisplayStackPresentation extends ContainerPresentation {
    override readonly elRootType!: HTMLElement;

    override initDom(): this['elRootType'] {
        return htmlFactory.div({ className: 'display-stack' });
    }

    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
            '.display-stack': {
                position: 'relative'
            }
        };
    }
}