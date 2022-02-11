/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import Presentation from '../../../lib/agency/agent/Presentation';
import html from '../../../lib/agency/agents/htmlFactory';

export default class ProjectCardPresentation extends Presentation {
    @override
    override initStyle(): string[] {
        return [
            ...super.initStyle(),
            `.project-card {

            }`
        ];
    }

    @override
    override initRoot(): HTMLElement {
        const { article } = html;

        return article({ className: 'project-card' }, ['PROJECT CARD']);
    }
}