/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../../AgentStyle';
import htmlFactory from '../../htmlFactory';
import ContainerPresentation from '../container/Presentation';

class DisplayStackPresentation extends ContainerPresentation {
    override elRoot: HTMLElement = htmlFactory.div({ classList: ['display-stack'] });
    override get styleRules(): AgentStyle {
        return {
            ...super.styleRules,
            '.display-stack': {
                position: 'relative'
            }
        };
    }
}

export default DisplayStackPresentation;