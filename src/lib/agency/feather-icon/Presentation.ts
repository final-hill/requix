/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Presentation from '../agent/Presentation';
import AgentStyle from '../AgentStyle';
import svgFactory from '../svgFactory';
import featherSprite from './feather-sprite.svg';
import FeatherIconName from './FeatherIconName';

class FeatherIconPresentation extends Presentation {
    override elRoot: SVGElement = svgFactory.svg({ classList: ['feather-icon'] }, [
        svgFactory.use()
    ]);
    get icon(): FeatherIconName {
        const href = this.elRoot!.querySelector('use')!
            .getAttribute('href')!;

        return href.slice(href.indexOf('#')) as FeatherIconName;
    }
    set icon(value: FeatherIconName) {
        this.elRoot!.querySelector('use')!
            .setAttribute('href', `${featherSprite}#${value}`);
    }
    override get styleRules(): AgentStyle {
        return {
            ...super.styleRules,
            '.feather-icon': {
                height: '24px',
                width: '24px',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
            }
        };
    }
}

export default FeatherIconPresentation;