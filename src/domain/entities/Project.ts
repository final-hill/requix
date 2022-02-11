/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Contract, Contracted, invariant } from '@final-hill/decorator-contracts';
import { Uuid } from '../values/Uuid';
import Artifact from './Artifact';
import Requirement from './Requirement';

export interface ProjectType {
    id: Uuid;
    artifacts: Artifact[];
    downTraceable: boolean;
    upTraceable: boolean;
    requirements: Requirement[];
    title: string;
}

const projectContract = new Contract<ProjectType>({
    [invariant]: self =>
        self.requirements.every(req => req.project === self) &&
        self.artifacts.every(art => art.upTraceable) && // upTraceability
        // downTraceability: For every requirement at least one artifact follows from it.
        self.requirements.every(req => self.artifacts.some(art => art.followsFrom === req))
});

/**
 * The set of human processes involved in the planning,
 * construction, revision, and operation of a system.
 * Associated with a single system.
 */
@Contracted(projectContract)
export default class Project implements ProjectType {
    #artifacts!: Artifact[];
    #downTraceable!: boolean;
    #id!: Uuid;
    #requirements!: Requirement[];
    #title!: string;
    #upTraceable!: boolean;

    constructor(params: ProjectType) {
        Object.assign(this, params);
    }

    get id(): Uuid { return this.#id; }
    set id(value) { this.#id = value; }

    get artifacts(): Artifact[] { return this.#artifacts; }
    set artifacts(value) { this.#artifacts = value; }

    get downTraceable(): boolean { return this.downTraceable; }
    set downTraceable(value) { this.#downTraceable = value; }

    get upTraceable(): boolean { return this.upTraceable; }
    set upTraceable(value) { this.#upTraceable = value; }

    get requirements(): Requirement[] { return this.#requirements; }
    set requirements(value) { this.#requirements = value; }

    get title(): string { return this.title; }
    set title(value: string) { this.#title = value; }
}
