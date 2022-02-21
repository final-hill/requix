/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ComponentControl from '../agents/component/ComponentControl';
import FeatherIconPresentation from './FeatherIconPresentation';

export default class FeatherIconControl extends ComponentControl<FeatherIconPresentation> {
    #iconName: string;
    constructor({ iconName }: { iconName: string }) {
        super();
        this.#iconName = iconName;
    }

    override initPresentation() {
        return new FeatherIconPresentation();
    }

    override load(): Promise<void> {
        this.presentation.icon = this.#iconName;

        return super.load();
    }
}