/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import Presentation from '../../agent/Presentation';

export default class ApplicationPresentation extends Presentation {
    @override
    override initRoot(): HTMLElement {
        return document.documentElement;
    }
}