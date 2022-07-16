/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import type { AgentStyle } from '../../AgentStyle';
import htmlFactory from '../../htmlFactory';
import StyleManager from '../../StyleManager';
import { kebab } from '../../util';
import ContainerPresentation from '../container/Presentation';

class ApplicationPresentation extends ContainerPresentation {
    override elRoot = document.body as HTMLBodyElement;
    readonly themeManager = new StyleManager('agency-theme');

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

    get themeRules(): AgentStyle {
        return Object.create(null);
    }

    attachTheme(): void {
        /*
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
        */
    }
    detachTheme(): void {
        /*
        const style = document.querySelector('#app-theme');
        style?.remove();
        */
    }

    override onAttached(): void {
        super.onAttached();
        this.attachTheme();
    }

    override onDetached(): void {
        super.onDetached();
        this.detachTheme();
    }
}

export default ApplicationPresentation;