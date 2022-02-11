/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Project from './Project';

/**
 * An Organization manages projects and more
 */
export default class Organization {
    #name: string;
    #icon: URL;
    #description: string;
    #projects: Project[] = [];

    constructor(options: { name: string; icon: URL; description: string }) {
        this.#name = options.name;
        this.#icon = options.icon;
        this.#description = options.description;
    }

    get name(): string { return this.#name; }
    set name(value: string) { this.#name = value; }

    get description(): string { return this.#description; }
    set description(value: string) { this.#description = value; }

    get icon(): URL { return this.#icon; }
    set icon(value: URL) { this.#icon = value; }

    get projects(): Project[] { return [...this.#projects]; }
}
