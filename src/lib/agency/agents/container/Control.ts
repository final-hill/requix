/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Control from '../../agent/Control';
import FeatherIconName from '../../feather-icon/FeatherIconName';
import ContainerPresentation from './Presentation';

export interface ContainerOptions {
    navIcon?: FeatherIconName;
    navLabel?: string;
}

class Container extends Control {
    #children: Control[] = [];
    #navIcon?: FeatherIconName;
    #navLabel?: string;

    override presentation = new ContainerPresentation();

    constructor(options: ContainerOptions = {}) {
        super();
        this.#navIcon = options.navIcon;
        this.#navLabel = options.navLabel;
    }

    get children(): Control[] {
        return this.#children.slice();
    }

    get navIcon(): FeatherIconName | undefined {
        return this.#navIcon;
    }
    set navIcon(value: FeatherIconName | undefined) {
        this.#navIcon = value;
    }

    get navLabel(): string | undefined {
        return this.#navLabel;
    }

    set navLabel(value: string | undefined) {
        this.#navLabel = value;
    }

    appendChild(child: Control): void {
        if (child.hasParent) {
            child.remove();
        }
        child.parent = this;
        this.#children.push(child);

        if (this.presentation && child.presentation) {
            this.presentation.appendChild(child.presentation);
        }

        child.onAttached();
    }

    appendChildren(...children: Control[]): void {
        children.forEach(child => this.appendChild(child));
    }

    prependChild(child: Control): void {
        child.remove();
        child.parent = this;
        this.#children.unshift(child);

        if (this.presentation && child.presentation) {
            this.presentation.prependChild(child.presentation);
        }

        child.onAttached();
    }

    removeChild(child: Control): void {
        child.parent = undefined;
        this.#children = this.#children.filter(c => c !== child);

        if (this.presentation && child.presentation) {
            this.presentation.removeChild(child.presentation);
        }

        child.onDetached();
    }
}

export default Container;