/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Presentation from '../../agent/Presentation';
import AgentStyle from '../../AgentStyle';
import htmlFactory from '../../htmlFactory';

export default class TextSpanPresentation extends Presentation {
    override readonly elRootType!: HTMLSpanElement;

    override initDom(): this['elRootType'] {
        return htmlFactory.span({ className: 'text-span' });
    }

    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
            '.text-span': {}
        };
    }

    get text() { return this.elRoot.textContent ?? ''; }
    set text(value: string) { this.elRoot.textContent = value; }
}