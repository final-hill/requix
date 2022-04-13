/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Presentation from '../../agent/Presentation';

export default abstract class ContainerPresentation extends Presentation {
    appendChild(presentation: Presentation) {
        this.elRoot.appendChild(presentation.elRoot);
    }

    prependChild(presentation: Presentation) {
        this.elRoot.prepend(presentation.elRoot);
    }

    removeChild(presentation: Presentation) {
        this.elRoot.removeChild(presentation.elRoot);
    }
}