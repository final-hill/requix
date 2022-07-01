/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Agent from '../../agent/Control';
import TextSpanPresentation from './Presentation';

interface TextSpanOptions {
    text: string;
}

class TextSpan extends Agent {
    #text: string;
    override presentation: TextSpanPresentation;

    constructor(options: TextSpanOptions) {
        super();
        this.#text = options.text;
        this.presentation = new TextSpanPresentation({ text: options.text });
    }

    get text() {
        return this.#text;
    }
    set text(value: string) {
        this.#text = this.presentation.text = value;
    }
}

export default TextSpan;