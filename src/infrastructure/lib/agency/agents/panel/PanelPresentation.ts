/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Presentation from '../../agent/Presentation';
import AgentStyle from '../../AgentStyle';
import htmlFactory from '../../htmlFactory';
import ContainerPresentation from '../container/ContainerPresentation';

export default class PanelPresentation extends ContainerPresentation {
    override readonly elRootType!: HTMLElement;

    private _header = this.elRoot.querySelector('.panel-header')!;
    private _content = this.elRoot.querySelector('.panel-content')!;

    get title(): string {
        return this._header.textContent ?? '';
    }

    set title(value: string) {
        this._header.textContent = value;
    }

    override appendChild(presentation: Presentation): void {
        this._content.appendChild(presentation.elRoot);
    }

    override removeChild(presentation: Presentation): void {
        this._content.removeChild(presentation.elRoot);
    }

    override initDom(): HTMLElement {
        const { article, header, section } = htmlFactory;

        return article({ className: 'panel' }, [
            header({ className: 'panel-header' }),
            section({ className: 'panel-content' })
        ]);
    }

    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
            '.panel': {},
            '.panel-header': {},
            '.panel-content': {}
        };
    }
}