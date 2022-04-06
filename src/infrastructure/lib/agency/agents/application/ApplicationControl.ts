/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ContainerControl, { ContainerControlOptions } from '../container/ContainerControl';
import ApplicationPresentation from './ApplicationPresentation';

export interface ApplicationControlOptions extends ContainerControlOptions { }

export default abstract class ApplicationControl extends ContainerControl {
    static override readonly styleId: string = 'ApplicationControl';
    // private _router = new Router({
    //     onMissingRoute(url) {
    //         alert(`Missing Route: ${url.pathname}`);
    //         // TODO
    //     }
    // });

    override readonly presentationType!: ApplicationPresentation;

    constructor(options: ApplicationControlOptions) {
        super(options);

        this.onAttached();
    }

    get title(): string { return this.label ?? ''; }

    set title(value: string) { this.label = document.title = value; }

    override initPresentation(): ApplicationPresentation {
        return new ApplicationPresentation();
    }

    // abstract initRoutes(router: Router<ApplicationControl>): void;

    // FIXME
    // async routePage(page: PageControl) {
    //     history.pushState(null, '', page.route);
    //     page.onAttached();
    // }

    // onMissingRoute(url: URL) {
    //     // TODO
    // }
}