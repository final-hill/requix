/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ComponentPresentation from '../agents/component/ComponentPresentation';
import svgFactory from '../svgFactory';
import featherSprite from './feather-sprite.svg';

export default class FeatherIconPresentation extends ComponentPresentation {
    override initStyle(): string[] {
        return [
            ...super.initStyle(),
            `.feather-icon {
                height: 24px;
                width: 24px;
                fill: none;
                stroke: currentColor;
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
            }`
        ];
    }

    get icon(): string {
        const href = this.elRoot.querySelector('use')!
            .getAttribute('href')!;

        return href.slice(href.indexOf('#'));
    }

    set icon(value: string) {
        this.elRoot.querySelector('use')!
            .setAttribute('href', `${featherSprite}#${value}`);
    }

    override initRoot(): SVGElement {
        const { svg, use } = svgFactory,
            svgEl = svg({}, [
                use()
            ]);
        svgEl.classList.add('feather-icon');

        return svgEl;
    }
}