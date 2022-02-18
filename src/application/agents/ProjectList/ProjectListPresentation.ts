/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Presentation from '../../../lib/agency/agent/Presentation';
import html from '../../../lib/agency/agents/htmlFactory';

export default class ProjectListPresentation extends Presentation {
    override initStyle(): string[] {
        return [
            ...super.initStyle(),
            `.project-list {

            }`
        ];
    }

    override initRoot(): HTMLElement {
        const { section, header, h2 } = html;

        return section({ className: 'project-list' }, [
            header({}, [
                h2({}, ['Projects'])
            ]),
            'PROJECT LIST'
        ]);
    }
}