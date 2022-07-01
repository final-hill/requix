/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ContainerPresentation from '../container/Presentation';
import html from '../../htmlFactory';
import AgentStyle from '../../AgentStyle';
import Presentation from '../../agent/Presentation';

class PanelPresentation extends ContainerPresentation {
    get elHeader(): HTMLElement {
        return this.elRoot.querySelector('.panel-header')!;
    }
    get elContent(): HTMLElement {
        return this.elRoot.querySelector('.panel-content')!;
    }
    override elRoot: HTMLElement = html.article({ classList: ['panel'] }, [
        html.header({ classList: ['panel-header'] }),
        html.section({ classList: ['panel-content'] })
    ]);
    override get styleRules(): AgentStyle {
        return {
            ...super.styleRules,
            '.panel': {},
            '.panel-header': {},
            '.panel-content': {}
        };
    }
    get title(): string {
        return this.elHeader.textContent ?? '';
    }
    set title(value: string) {
        this.elHeader.textContent = value;
    }
    override appendChild(presentation: Presentation): void {
        this.elContent.appendChild(presentation.elRoot);
    }
    override removeChild(presentation: Presentation): void {
        this.elContent.removeChild(presentation.elRoot);
    }
}

export default PanelPresentation;