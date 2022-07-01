/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Agent from '../../agent/Control';
import Container, { ContainerOptions } from '../container/Control';
import DisplayStackPresentation from './Presentation';

export interface DisplayStackOptions extends ContainerOptions {
    selectedIndex?: number;
}

class DisplayStack extends Container {
    #selectedIndex: number;
    override presentation = new DisplayStackPresentation();

    constructor(options: DisplayStackOptions = {}) {
        super(options);
        this.#selectedIndex = options.selectedIndex ?? -1;
    }

    get selectedControl(): Agent | undefined {
        return this.children[this.#selectedIndex];
    }

    get selectedIndex() {
        return this.#selectedIndex;
    }
    set selectedIndex(value) {
        this.children.forEach(child => child.show());
        this.#selectedIndex = value;
        if (this.selectedControl) {
            this.selectedControl.hide();
        }
    }

    override onAttached(): void {
        super.onAttached();
        this.selectedIndex = this.#selectedIndex;
    }

    override removeChild(child: Agent): void {
        this.#selectedIndex = -1;
        super.removeChild(child);
    }
}

export default DisplayStack;