/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ProjectLocalRepository from '../../../data/repositories/project-local/ProjectLocalRepository';
import GetAllProjectsUseCase from '../../../domain/usecases/GetAllProjectsUseCase';
import PageControl from '../../../lib/agency/agents/page/PageControl';
import ProjectListControl from '../../agents/ProjectList/ProjectListControl';
import HomePresentation from './HomePresentation';

export default class HomeControl extends PageControl {
    #getAllProjectsUseCase = new GetAllProjectsUseCase(new ProjectLocalRepository());
    #projectListControl = new ProjectListControl(this.#getAllProjectsUseCase);

    constructor() {
        super();

        this.addChild(this.#projectListControl);
    }

    override initPresentation(): HomePresentation {
        return new HomePresentation();
    }
}