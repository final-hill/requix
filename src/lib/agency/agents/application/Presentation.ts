/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../../AgentStyle';
import AgentTheme from '../../AgentTheme';
import htmlFactory from '../../htmlFactory';
import { kebab } from '../../util';
import ContainerPresentation from '../container/Presentation';

class ApplicationPresentation extends ContainerPresentation {
    override elRoot = document.body as HTMLBodyElement;
    #theme: AgentTheme = Object.create(null);

    override get styleRules(): AgentStyle {
        return {
            ...super.styleRules,
            'html, body': {
                height: '100%',
                margin: '0',
                padding: '0'
            }
        };
    }

    get theme(): AgentTheme {
        return this.#theme;
    }
    set theme(value: AgentTheme) {
        this.#theme = value;
        this.detachTheme();
        this.attachTheme();
    }
    attachTheme(): void {
        const styleId = 'app-theme',
            style = document.head.querySelector(`#${styleId}`) as HTMLStyleElement ??
                document.head.insertBefore(
                    htmlFactory.style({ id: styleId }),
                    document.head.querySelector('style')
                ),
            rootRule = `:root {\r\n\t${Object.entries(this.theme).map(([key, value]) => `${kebab(key)}: ${value};`).join('\r\n\t')}\r\n}`;

        style.sheet!.insertRule(rootRule);
        // To make the rules visible in the DOM inspector
        style.textContent = rootRule;
    }
    detachTheme(): void {
        const style = document.querySelector('#app-theme');
        style?.remove();
    }
}

export default ApplicationPresentation;