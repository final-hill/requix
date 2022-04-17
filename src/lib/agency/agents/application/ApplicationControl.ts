/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentTheme from '../../AgentTheme';
import htmlFactory from '../../htmlFactory';
import kebab from '../../util/kebab';
import ContainerControl, { ContainerControlOptions } from '../container/ContainerControl';
import ApplicationPresentation from './ApplicationPresentation';

export interface ApplicationControlOptions extends ContainerControlOptions {
    theme?: AgentTheme;
}

export default class ApplicationControl extends ContainerControl {
    static override readonly styleId: string = 'ApplicationControl';
    // private _router = new Router({
    //     onMissingRoute(url) {
    //         alert(`Missing Route: ${url.pathname}`);
    //         // TODO
    //     }
    // });

    private _theme: AgentTheme;

    override readonly presentationType!: ApplicationPresentation;

    constructor(options: ApplicationControlOptions) {
        super(options);

        this._theme = options.theme ?? {};

        this.onAttached();
    }

    get theme() { return this._theme; }
    set theme(value: AgentTheme) {
        this._theme = value;
        this.detachTheme();
        this.attachTheme();
    }

    get title(): string { return this.navLabel ?? ''; }

    set title(value: string) { this.navLabel = document.title = value; }

    attachTheme() {
        const styleId = 'app-theme',
            style = document.head.querySelector(`#${styleId}`) as HTMLStyleElement ??
                document.head.insertBefore(
                    htmlFactory.style({ id: styleId }),
                    document.head.querySelector('style')
                ),
            rootRule = `:root {
                ${Object.entries(this.theme).map(([key, value]) => `${kebab(key)}: ${value};`).join('\r\n')}
            }`;

        style.sheet!.insertRule(rootRule);
        // To make the rules visible in the DOM inspector
        style.textContent = rootRule;
    }

    detachTheme() {
        const style = document.querySelector('#app-theme');
        style?.remove();
    }

    override initPresentation(): ApplicationPresentation {
        return new ApplicationPresentation({ theme: this._theme });
    }

    override onAttached(): void {
        super.onAttached();
        this.theme = this._theme;
        this.title = this.navLabel ?? '{untitled}';
    }

    override onDetached(): void {
        this.detachTheme();
        super.onDetached();
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