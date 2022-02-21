/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ComponentPresentation from '../../../lib/agency/agents/component/ComponentPresentation';
import htmlFactory from '../../../lib/agency/htmlFactory';

export default class ProjectListPresentation extends ComponentPresentation {
    override initStyle(): string[] {
        return [
            ...super.initStyle(),
            `.project-list {

            }`
        ];
    }

    override initRoot(): HTMLElement {
        const { section, header, h2 } = htmlFactory;

        return section({ className: 'project-list' }, [
            header({}, [
                h2({}, ['Projects'])
            ])
        ]);
    }
}