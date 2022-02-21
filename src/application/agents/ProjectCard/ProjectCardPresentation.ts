/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Presentation from '../../../lib/agency/agent/Presentation';
import htmlFactory from '../../../lib/agency/htmlFactory';

export default class ProjectCardPresentation extends Presentation {
    override initStyle(): string[] {
        return [
            ...super.initStyle(),
            `.project-card {

            }`
        ];
    }

    override initRoot(): HTMLElement {
        const { article } = htmlFactory;

        return article({ className: 'project-card' }, ['PROJECT CARD']);
    }
}