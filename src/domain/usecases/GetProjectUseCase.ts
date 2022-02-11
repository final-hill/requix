/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { UseCase } from '../common/UseCase';
import { Uuid } from '../values/Uuid';
import Project from '../entities/Project';
import { ProjectRepository } from '../repositories/project.repository';

export class GetProjectUseCase extends UseCase<Uuid, Project | undefined> {
    #repository: ProjectRepository;

    constructor(repository: ProjectRepository) {
        super();
        this.#repository = repository;
    }

    override execute(id: Uuid): Promise<Project | undefined> {
        return this.#repository.getProjectById(id);
    }
}