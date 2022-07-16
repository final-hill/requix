/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Container from '../container/Control';
import ApplicationPresentation from './Presentation';

class Application extends Container {
    override presentation = new ApplicationPresentation();

    constructor() {
        super();
        this.start();
    }

    start(): void {
        this.onAttached();
    }

    get title(): string {
        return this.navLabel ?? '';
    }
    set title(value: string) {
        this.navLabel = document.title = value;
    }
}

export default Application;