/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ComponentPresentation from '../../../lib/agency/agents/component/ComponentPresentation';
import htmlFactory from '../../../lib/agency/htmlFactory';

export default class NewProjectCardPresentation extends ComponentPresentation {
    override initStyle(): string[] {
        return [
            ...super.initStyle(),
            `.new-project-card {
                background-color: transparent;
                border: none;
                color: var(--font-primary);
                cursor: pointer;
            }`,
            `.new-project-card .feather-icon {
                height: 1.5in;
                stroke-width: 1;
                width: 1.5in;
            }`,
            `.new-project-card figure {
                margin: 0;
            }`
        ];
    }

    override get defaultSlot() {
        return this.elRoot.querySelector('div')!;
    }

    override initRoot(): HTMLElement {
        const { button, div, figure, figcaption } = htmlFactory;

        return button({ className: 'new-project-card', type: 'button' }, [
            figure({}, [
                div(),
                figcaption({}, ['New Project'])
            ])
        ]);
    }
}