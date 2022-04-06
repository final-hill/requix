/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Control from '../../agent/Control';
import TextSpanPresentation from './TextSpanPresentation';

export interface TextSpanControlOptions {
    text: string;
}

export default class TextSpanControl extends Control {
    static override readonly styleId: string = 'TextSpanControl';

    override readonly presentationType!: TextSpanPresentation;

    private _text!: string;

    constructor(options: TextSpanControlOptions) {
        super(options);
        this.text = options.text;
    }

    get text() { return this.presentation!.text; }
    set text(value: string) { this.presentation!.text = value; }

    override init(options: TextSpanControlOptions) {
        this._text = options.text;
    }

    override initPresentation(): this['presentationType'] {
        return new TextSpanPresentation();
    }

    override onAttached() {
        super.onAttached();
        this.text = this._text;
    }
}