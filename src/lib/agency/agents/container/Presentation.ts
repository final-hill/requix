/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { assert } from '../../util';
import Presentation from '../../agent/Presentation';

const msgNoElement = 'There is no element associated with this presentation',
    msgOtherNoElement = 'The provided presentation does not have an element';

class ContainerPresentation extends Presentation {
    appendChild(presentation: Presentation): void {
        assert(this.elRoot != null, msgNoElement);
        assert(presentation.elRoot != null, msgOtherNoElement);

        this.elRoot.appendChild(presentation.elRoot);
    }
    prependChild(presentation: Presentation): void {
        assert(this.elRoot != null, msgNoElement);
        assert(presentation.elRoot != null, msgOtherNoElement);

        this.elRoot.prepend(presentation.elRoot);
    }
    removeChild(presentation: Presentation): void {
        assert(this.elRoot != null, msgNoElement);
        assert(presentation.elRoot != null, msgOtherNoElement);

        this.elRoot.removeChild(presentation.elRoot);
    }
}

export default ContainerPresentation;