/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Presentation from '../../agent/Presentation';

export default class ContainerPresentation extends Presentation {
    get defaultSlot() { return this.elRoot; }

    addChild(presentation: Presentation) {
        this.defaultSlot.appendChild(presentation.elRoot);
    }

    removeChild(presentation: Presentation) {
        this.defaultSlot.removeChild(presentation.elRoot);
    }
}