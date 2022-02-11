/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import html from '../../../lib/agency/agents/htmlFactory';
import PagePresentation from '../../../lib/agency/agents/page/PagePresentation';

export default class ShellPresentation extends PagePresentation {
    @override
    override initStyle(): string[] {
        return [
            ...super.initStyle(),
            `:root {
                --palette0: rgb(54, 68, 73);
                --palette1: rgb(35, 37, 39);
                --palette1-1: rgb(45, 47, 49);
                --palette2: rgb(218, 218, 218);

                --font-primary: var(--palette2);
                --font: Verdana, Geneva, Tahoma, sans-serif;
            }`,
            `.shell {
                background: var(--palette0);
                color: var(--font-primary);
                display: flex;
                flex-direction: row;
                font-family: var(--font);
                height: 100%;
            }`,
            `.global-nav {
                background: linear-gradient(to right, var(--palette1), var(--palette1), var(--palette1-1));
                border-right: 1px outset;
                box-sizing: border-box;
                overflow: auto;
                width: 2in;
            }`,
            `.global-nav a {
                color: var(--font-primary);
                height: 100%;
                line-height: 0.5in;
                padding-left: 0.2in;
                text-decoration: none;
                width: 100%;
            }`,
            `.global-nav ul {
                display: flex;
                flex-direction: column;
                list-style: none;
                margin: 0;
                padding: 0;
            }`,
            `.global-nav li {
                height: 0.5in;
            }`,
            `.page {
                background: radial-gradient(ellipse at top, var(--palette0), var(--palette1));
                overflow: auto;
                width: calc(100vw - 2in);
            }`
        ];
    }
    @override
    override initRoot(): HTMLElement {
        const { div, nav, ul, li, a, main, h1 } = html;

        return div({ className: 'shell' }, [
            nav({ className: 'global-nav' }, [
                ul({}, [
                    li({}, [
                        h1({}, ['Requix'])
                    ]),
                    li({}, [
                        a({ href: '/' }, ['Home'])
                    ]),
                    li({}, [
                        a({ href: '/projects' }, ['Projects'])
                    ])
                ])
            ]),
            main({ className: 'page' })
        ]);
    }
}