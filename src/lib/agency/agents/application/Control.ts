/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Container from '../container/Control';
import ApplicationPresentation from './Presentation';
import AgentTheme from '../../AgentTheme';

class Application extends Container {
    override presentation = new ApplicationPresentation();

    constructor() {
        super();
        this.start();
    }

    start(): void {
        this.onAttached();
    }

    get theme(): AgentTheme {
        return this.presentation.theme;
    }
    set theme(value: AgentTheme) {
        this.presentation.theme = value;
    }

    get title(): string {
        return this.navLabel ?? '';
    }
    set title(value: string) {
        this.navLabel = document.title = value;
    }

    override onAttached(): void {
        super.onAttached();
        this.presentation.theme = this.theme;
    }

    override onDetached(): void {
        this.presentation.detachTheme();
        super.onDetached();
    }
}

export default Application;