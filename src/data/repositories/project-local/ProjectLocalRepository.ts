/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Uuid } from '../../../domain/values/Uuid';
import Project from '../../../domain/entities/Project';
import { ProjectRepository } from '../../../domain/repositories/project.repository';
import { ProjectLocal } from './ProjectLocal';
import { ProjectLocalMapper } from './ProjectLocalMapper';

export class ProjectLocalRepository extends ProjectRepository {
    #mapper = new ProjectLocalMapper();

    constructor() {
        super();
        this.saveProject(
            new Project({
                id: new Uuid(),
                artifacts: [],
                downTraceable: false,
                upTraceable: true,
                requirements: [],
                title: 'Dummy Project'
            })
        );
    }

    async getProjectById(id: Uuid): Promise<Project | undefined> {
        return (await this.getAllProjects())
            .filter(project => project.id.equals(id))[0];
    }

    async getAllProjects(): Promise<Project[]> {
        const rawProjects: ProjectLocal[] = JSON.parse(localStorage.getItem('projects') ?? '[]');

        return rawProjects.map(this.#mapper.mapFrom);
    }

    async hasProject(id: Uuid): Promise<boolean> {
        return (await this.getProjectById(id)) !== undefined;
    }

    async saveProject(project: Project): Promise<void> {
        const projects = (await this.getAllProjects())
            .filter(p => !p.id.equals(project.id));
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects.map(this.#mapper.mapTo)));
    }
}