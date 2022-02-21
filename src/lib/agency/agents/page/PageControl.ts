/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Uuid } from '../../../../domain/values/Uuid';
import Control from '../../agent/Control';
import htmlFactory from '../../htmlFactory';
import PagePresentation from './PagePresentation';

export default class PageControl<P extends PagePresentation = PagePresentation> extends Control<P> {
    static readonly styleId = `page-${new Uuid()}`;

    #title = '{untitled}';

    get title(): string {
        return this.#title;
    }
    set title(value: string) {
        this.#title = value;
        document.title = value;
    }

    override initPresentation(): P {
        return new PagePresentation() as P;
    }

    override load(): Promise<void> {
        if (this.presentation) {
            const { elRoot, styleRules } = this.presentation,
                styleId: string = Reflect.get(this.constructor, 'styleId'),
                style = document.getElementById(styleId) as HTMLStyleElement ??
                    document.head.appendChild(htmlFactory.style({ id: styleId }));
            document.body.appendChild(elRoot);
            document.head.appendChild(style);
            styleRules.forEach(rule => {
                style.sheet!.insertRule(rule);
            });
        }

        return super.load();
    }

    override unload(): Promise<void> {
        this.presentation?.elRoot.remove();
        const style = document.getElementById(Reflect.get(this.constructor, 'styleId'));
        style?.remove();

        return super.unload();
    }
}