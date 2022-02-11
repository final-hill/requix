/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Contract, Contracted, implies, invariant } from '@final-hill/decorator-contracts';
import Predicate from './Predicate';
import Project from './Project';

const requirementContract = new Contract<Requirement>({
    [invariant]: self => implies(
        self.project != undefined, Boolean(self.project?.requirements.includes(self))
    )
});

/**
 * A Requirement is a specification of a particular system property.
 * A relevant Property of a Project, Environment, Goal, or System
 *
 * A Requirement is a singular documented physical or functional
 *  need that a particular design, product or process aims to satisfy
 *
 * homogeneous if the property combines properties of a similar nature, and heterogeneous otherwise.
 *
 %% SubRequirements
 */
@Contracted(requirementContract)
export default class Requirement {
    #belongsTo?: Requirement;
    #characterizes?: Requirement;
    #constrains?: Requirement;
    #contradicts?: Requirement;
    #details?: Requirement;
    #disjoins?: Requirement;
    #duplicates?: Requirement;
    #excepts?: Requirement;
    #explains?: Requirement;
    #extends?: Requirement;
    #follows?: Requirement;
    #id?: string; // UUID?
    #composite = false;
    #isRelevant = false;
    #wellFormed = false;
    #project?: Project;
    #property: Predicate = () => true;
    #repeats?: Requirement;
    #shares?: Requirement;
    #statement?: string;

    /**
     *
     */
    get id(): string | undefined { return this.#id; }

    /**
     * A property of a project or system is relevant if it can affect or be affected by a stakeholder.
     * A property of the environment is relevant if it can affect or be affected by the project or system.
     */
    get isRelevant() { return this.#isRelevant; }

    /**
     *
     */
    get belongsTo(): Requirement | undefined { return this.#belongsTo; }

    /**
     *
     */
    get characterizes(): Requirement | undefined { return this.#characterizes; }

    /**
     *
     */
    get constrains(): Requirement | undefined { return this.#constrains; }

    /**
     *
     */
    get contradicts(): Requirement | undefined { return this.#contradicts; }

    /**
     *
     */
    get details(): Requirement | undefined { return this.#details; }

    /**
     *
     */
    get disjoins(): Requirement | undefined { return this.#disjoins; }

    /**
     *
     */
    get duplicates(): Requirement | undefined { return this.#duplicates; }

    /**
     *
     */
    get excepts(): Requirement | undefined { return this.#excepts; }

    /**
     *
     */
    get extends(): Requirement | undefined { return this.#extends; }

    /**
     *
     */
    get explains(): Requirement | undefined { return this.#explains; }

    /**
     *
     */
    get follows(): Requirement | undefined { return this.#follows; }

    /**
     * Requirement/property is a compound expression
     */
    get composite(): boolean { return this.#composite; }

    /**
     * this.statement translatesTo this.property
     */
    get wellFormed(): boolean { return this.#wellFormed; }

    /**
     *
     */
    get project(): Project | undefined { return this.#project; }

    /**
     * A formal, declarative sentence that is either true or false. A Predicate.
     */
    get property(): Predicate { return this.#property; }

    /**
     *
     */
    get repeats(): Requirement | undefined { return this.#repeats; }

    /**
     *
     */
    get shares(): Requirement | undefined { return this.#shares; }

    /**
     * A human readable expression of a property.
     * A statement 'specifies' a property
     */
    get statement(): string | undefined { return this.#statement; }
}
