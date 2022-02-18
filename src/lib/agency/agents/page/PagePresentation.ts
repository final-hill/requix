/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Presentation from '../../agent/Presentation';

export default class PagePresentation extends Presentation {
    override initStyle(): string[] {
        return [
            `html, body {
                height: 100%;
                margin: 0;
                padding: 0;
            }`
        ];
    }
}