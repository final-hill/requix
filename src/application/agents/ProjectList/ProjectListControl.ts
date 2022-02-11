/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import Control from '../../../lib/agency/agent/Control';
import ProjectListPresentation from './ProjectListPresentation';

export default class ProjectListControl extends Control {
    @override
    override initPresentation(): ProjectListPresentation {
        return new ProjectListPresentation();
    }
}