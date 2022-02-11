/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */
import { Contract, Contracted, invariant, implies } from '@final-hill/decorator-contracts';
import Project from './Project';
import Requirement from './Requirement';

const artifactContract = new Contract<Artifact>({
    [invariant]: self =>
        // uptraceability: Every element of every artifact follows from some element of the requirements
        implies(self.upTraceable, self.followsFrom != null) &&
        implies(self.followsFrom != null, self.followsFrom?.project === self.project) // sameProject
});

/**
 *
 */
@Contracted(artifactContract)
export default class Artifact {
    #upTraceable = false;
    get upTraceable(): boolean { return this.#upTraceable; }
    set upTraceable(value: boolean) { this.#upTraceable = value; }

    #project?: Project;
    get project(): Project | undefined { return this.#project; }
    set project(value: Project | undefined) { this.#project = value; }

    #followsFrom?: Requirement;
    get followsFrom(): Requirement | undefined { return this.#followsFrom; }
    set followsFrom(value: Requirement | undefined) { this.#followsFrom = value; }
}
