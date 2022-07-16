/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Presentation from '../../agent/Presentation';
import type { AgentStyle } from '../../AgentStyle';
import htmlFactory from '../../htmlFactory';

interface TextSpanPresentationOptions {
    text: string;
}

class TextSpanPresentation extends Presentation {
    override elRoot = htmlFactory.span({ classList: ['text-span'] });

    constructor(options: TextSpanPresentationOptions) {
        super();
        this.text = options.text;
    }

    override get styleRules(): AgentStyle {
        return {
            ...super.styleRules,
            '.text-span': {}
        };
    }
    get text(): string {
        return this.elRoot.textContent ?? '';
    }
    set text(value: string) {
        this.elRoot.textContent = value;
    }
}

export default TextSpanPresentation;