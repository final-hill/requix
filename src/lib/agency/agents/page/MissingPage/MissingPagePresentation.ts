/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import html from '../../htmlFactory';
import PagePresentation from '../PagePresentation';

export default class MissingPagePresentation extends PagePresentation {
    @override
    override initRoot(): HTMLElement {
        const { h1, main } = html;

        return main({ className: 'page' }, [
            h1({}, ['Missing Page'])
        ]);
    }
}