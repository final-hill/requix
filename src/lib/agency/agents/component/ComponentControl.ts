/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Uuid } from '../../../../domain/values/Uuid';
import Control from '../../agent/Control';
import htmlFactory from '../../htmlFactory';
import ComponentPresentation from './ComponentPresentation';

export default class ComponentControl<P extends ComponentPresentation = ComponentPresentation> extends Control<P> {
    static readonly styleId = `component-${new Uuid()}`;

    override initPresentation(): P {
        return new ComponentPresentation() as P;
    }

    override load(): Promise<void> {
        if (this.presentation) {
            const { styleRules } = this.presentation,
                styleId: string = Reflect.get(this.constructor, 'styleId'),
                style = document.getElementById(styleId) as HTMLStyleElement ??
                    document.head.appendChild(htmlFactory.style({ id: styleId }));
            styleRules.forEach(rule => {
                style.sheet!.insertRule(rule);
            });
        }

        return super.load();
    }

    override unload(): Promise<void> {
        this.presentation?.elRoot.remove();
        const styleId: string = Reflect.get(this.constructor, 'styleId'),
            style = document.getElementById(styleId);
        style?.remove();

        return super.unload();
    }
}