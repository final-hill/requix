/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Control from '../../agent/Control';
import PageControl from '../page/PageControl';
import ApplicationPresentation from './ApplicationPresentation';
import Router from './Router';

export default abstract class ApplicationControl extends Control<ApplicationPresentation> {
    router: Router;
    currentPage?: PageControl;

    constructor() {
        super();
        this.router = this.initRoutes();
        this.start();
    }

    override initPresentation() {
        return new ApplicationPresentation();
    }

    initRoutes(): Router {
        return new Router();
    }

    start() {
        // TODO: only supporting homepage on initial load
        // perhaps use service worker to support other locations as entry point onload
        this.routePage('/');
    }

    async routePage(path: string) {
        if (this.currentPage) {
            await this.currentPage.unload();
            this.currentPage.remove();
        }
        const Page = this.router.route(document.location.pathname);
        this.currentPage = new Page();
        this.addChild(this.currentPage);
        await this.currentPage.load();
    }
}