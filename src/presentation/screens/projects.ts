/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import PanelControl from '../../lib/agency/agents/panel/PanelControl';
import TextSpanControl from '../../lib/agency/agents/text-span/TextSpanControl';
import FeatherIconName from '../../lib/agency/feather-icon/FeatherIconName';

export default new PanelControl({
    title: 'Projects',
    navLabel: 'Projects',
    navIcon: FeatherIconName.briefcase,
    children: [new TextSpanControl({ text: 'PROJECTS' })]
});