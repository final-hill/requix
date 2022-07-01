/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Control from '../agent/Control';
import FeatherIconName from './FeatherIconName';
import FeatherIconPresentation from './Presentation';

interface FeatherIconOptions {
    icon: FeatherIconName;
}

class FeatherIcon extends Control {
    icon: FeatherIconName;
    override presentation = new FeatherIconPresentation();

    constructor(options: FeatherIconOptions) {
        super();
        this.icon = options.icon;
    }

    override onAttached(this: FeatherIcon) {
        this.presentation.icon = this.icon;
    }
}

export default FeatherIcon;