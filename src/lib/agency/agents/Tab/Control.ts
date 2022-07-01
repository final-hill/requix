/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import FeatherIcon from '../../feather-icon/Control';
import FeatherIconName from '../../feather-icon/FeatherIconName';
import Container from '../container/Control';
import TextSpan from '../text-span/Control';
import TabPresentation from './Presentation';

export interface TabOptions {
    icon?: FeatherIconName;
    label?: string;
}

class Tab extends Container {
    #icon: FeatherIcon = new FeatherIcon({ icon: FeatherIconName.xCircle });
    #label: TextSpan = new TextSpan({ text: '' });

    override presentation = new TabPresentation();

    constructor(options: TabOptions) {
        super();
        super.navIcon = this.#icon.icon = options.icon ?? FeatherIconName.xCircle;
        super.navLabel = this.#label.text = options.label ?? '';
    }

    get isActive() {
        return this.presentation.isActive;
    }
    set isActive(value: boolean) {
        this.presentation.isActive = value;
    }

    override set navIcon(value: FeatherIconName | undefined) {
        super.navIcon = value;

        this.#icon.icon = value ?? FeatherIconName.xCircle;
        this.#icon.isHidden = value == undefined;
    }

    override set navLabel(value: string | undefined) {
        super.navLabel = value;

        this.#label.text = value ?? '';
        this.#label.isHidden = value == undefined;
    }

    override onAttached() {
        super.onAttached();
        this.appendChild(this.#icon);
        this.appendChild(this.#label);
    }

    override onDetached() {
        this.removeChild(this.#icon);
        this.removeChild(this.#label);
        super.onDetached();
    }
}

export default Tab;