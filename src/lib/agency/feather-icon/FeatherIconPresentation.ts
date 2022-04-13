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

export default class FeatherIconPresentation extends Presentation {
    override readonly elRootType!: SVGElement;

    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
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

    get icon(): FeatherIconName {
        const href = this.elRoot.querySelector('use')!
            .getAttribute('href')!;

        return href.slice(href.indexOf('#')) as FeatherIconName;
    }

    set icon(value: FeatherIconName) {
        this.elRoot.querySelector('use')!
            .setAttribute('href', `${featherSprite}#${value}`);
    }

    override initDom(): this['elRootType'] {
        const { svg, use } = svgFactory,
            svgEl = svg({}, [
                use()
            ]);
        svgEl.classList.add('feather-icon');

        return svgEl;
    }
}