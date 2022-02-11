/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import Abstraction from '../../agent/Abstraction';
import Control from '../../agent/Control';
import Presentation from '../../agent/Presentation';
import MissingPageControl from '../page/MissingPage/MissingPageControl';
import PageControl from '../page/PageControl';
import ApplicationAbstraction from './ApplicationAbstraction';
import ApplicationPresentation from './ApplicationPresentation';
import Router from './Router';

export default abstract class ApplicationControl extends Control<ApplicationPresentation, ApplicationAbstraction> {
    router: Router;
    currentPage?: PageControl;

    constructor() {
        super();
        this.router = this.initRoutes();
        this.router.routes.forEach(Page => this.addChild(new Page()));
        this.start();
    }

    @override
    override get children(): readonly PageControl[] {
        return super.children as PageControl[];
    }

    get pages(): readonly PageControl[] { return this.children; }

    @override
    override initAbstraction() {
        return new ApplicationAbstraction();
    }

    @override
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
        }
        const Page = this.router.route(document.location.pathname),
            page = this.pages.find(page => page instanceof Page) ?? new MissingPageControl();
        this.currentPage = page;
        await this.currentPage.load();
    }
}