/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import GetAllProjectsUseCase from '../../../domain/usecases/GetAllProjectsUseCase';
import ProjectListPresentation from './ProjectListPresentation';
import NewProjectCardControl from '../NewProjectCard/NewProjectCardControl';
import ComponentControl from '../../../lib/agency/agents/component/ComponentControl';

export default class ProjectListControl extends ComponentControl {
    // TODO: is an abstraction a collection of use cases?
    // ie. A collection of Commands
    // ie. A collection of command.execute()
    #getAllProjectsUseCase: GetAllProjectsUseCase;

    constructor(getAllProjectsUseCase: GetAllProjectsUseCase) {
        super();
        this.#getAllProjectsUseCase = getAllProjectsUseCase;
    }

    override async load(): Promise<void> {
        this.addChild(new NewProjectCardControl());
        /*
        this.#getAllProjectsUseCase.execute()
            ?.then(projects => projects.map(project => new ProjectCardControl({ project })))
            .then(projectCardControl => this.addChild(projectCardControl));
        */

        return super.load();
    }

    override initPresentation() {
        return new ProjectListPresentation();
    }
}