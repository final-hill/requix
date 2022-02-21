/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ComponentControl from '../../../lib/agency/agents/component/ComponentControl';
import FeatherIconControl from '../../../lib/agency/feather-icon/FeatherIconControl';
import NewProjectCardPresentation from './NewProjectCardPresentation';

export default class NewProjectCardControl extends ComponentControl {
    constructor() {
        super();
        this.addChild(new FeatherIconControl({ iconName: 'plus-square' }));
    }

    override initPresentation() {
        return new NewProjectCardPresentation();
    }
}