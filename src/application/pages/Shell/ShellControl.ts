/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import PageControl from '../../../lib/agency/agents/page/PageControl';
import ShellPresentation from './ShellPresentation';

export default class ShellControl extends PageControl {
    override initPresentation(): ShellPresentation {
        return new ShellPresentation();
    }
}