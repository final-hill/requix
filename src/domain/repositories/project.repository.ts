/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Uuid } from '../values/Uuid';
import Project from '../entities/Project';

export abstract class ProjectRepository {
    abstract hasProject(id: Uuid): Promise<boolean>;
    abstract getProjectById(id: Uuid): Promise<Project | undefined>;
    abstract getAllProjects(): Promise<Project[]>;
    abstract saveProject(project: Project): Promise<void>;
}