/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import PageControl from '../PageControl';
import MissingPagePresentation from './MissingPagePresentation';

export default class MissingPageControl extends PageControl<MissingPagePresentation> {
    @override
    override initPresentation(): MissingPagePresentation {
        return new MissingPagePresentation();
    }
}