/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import PanelPresentation from './Presentation';
import Container, { ContainerOptions } from '../container/Control';

export interface PanelOptions extends ContainerOptions {
    title?: string;
}

class Panel extends Container {
    override presentation = new PanelPresentation();

    /**
     * The header title for the panel
     */
    get title(): string {
        return this.presentation.title;
    }
    set title(value: string) {
        this.presentation.title = value;
    }

    constructor(options: PanelOptions = {}) {
        super(options);
        this.title = options.title ?? '';
    }
}

export default Panel;