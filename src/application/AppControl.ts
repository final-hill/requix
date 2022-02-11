/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import ApplicationControl from '../lib/agency/agents/application/ApplicationControl';
import Router from '../lib/agency/agents/application/Router';
import HomeControl from './pages/Home/HomeControl';

export default class AppControl extends ApplicationControl {
    @override
    override initRoutes(): Router {
        return new Router(
            { control: HomeControl, path: '/' }
        );
    }
}