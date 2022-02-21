/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { GetProjectUseCase } from '../../../domain/usecases/GetProjectUseCase';
import ComponentControl from '../../../lib/agency/agents/component/ComponentControl';
import ProjectCardPresentation from './ProjectCardPresentation';

export default class ProjectCardControl extends ComponentControl {
    #getProjectUseCase: GetProjectUseCase;

    constructor(getProjectUseCase: GetProjectUseCase) {
        super();
        this.#getProjectUseCase = getProjectUseCase;
    }

    override initPresentation() {
        return new ProjectCardPresentation();
    }

    override load(): Promise<void> {
        // TODO: update presentation

        return super.load();
    }
}