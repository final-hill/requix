/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Project from '../../domain/entities/Project';
import Repository from '../../infrastructure/lib/agency/IRepository';

export interface ProjectRepository extends Repository<Project> { }