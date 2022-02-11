/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import Project from '../../../domain/entities/Project';
import Control from '../../../lib/agency/agent/Control';
import ProjectCardPresentation from './ProjectCardPresentation';

export default class ProjectCardControl extends Control {
    constructor(options: { project: Project }) {
        super();
    }

    @override
    override initPresentation(): ProjectCardPresentation {
        return new ProjectCardPresentation();
    }
}