/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import PageControl from '../../../lib/agency/agents/page/PageControl';
import ProjectListControl from '../../agents/ProjectList/ProjectListControl';
import HomePresentation from './HomePresentation';

export default class HomeControl extends PageControl {
    constructor() {
        super();

        this.addChild(new ProjectListControl());
    }

    override initPresentation(): HomePresentation {
        return new HomePresentation();
    }
}