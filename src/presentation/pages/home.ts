/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import TextSpanControl from '../../lib/agency/agents/text-span/TextSpanControl';
import FeatherIconName from '../../lib/agency/feather-icon/FeatherIconName';
import PageControl from '../agents/Page/PageControl';

export default new PageControl({
    title: 'Home',
    navLabel: 'Home',
    navIcon: FeatherIconName.home,
    children: [new TextSpanControl({ text: 'HOME' })]
});