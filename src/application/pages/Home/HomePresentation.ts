/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ShellPresentation from '../Shell/ShellPresentation';

export default class HomePresentation extends ShellPresentation {
    override get defaultSlot() {
        return this.elRoot.querySelector('main')!;
    }

    override initStyle(): string[] {
        return [
            ...super.initStyle(),
            `.home-page {
                padding: 0.2in;
            }`
        ];
    }

    override initRoot(): HTMLElement {
        const shell = super.initRoot(),
            main = shell.querySelector('main')!;
        main.classList.add('home-page');

        return shell;
    }
}