/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { UseCase } from '../common/UseCase';
import Project from '../entities/Project';
import { ProjectRepository } from '../repositories/project.repository';

export class GetAllProjectsUseCase extends UseCase<void, Project[]> {
    #repository: ProjectRepository;

    constructor(repository: ProjectRepository) {
        super();
        this.#repository = repository;
    }

    override execute(): Promise<Project[]> {
        return this.#repository.getAllProjects();
    }
}