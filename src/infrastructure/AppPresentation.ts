/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ApplicationPresentation from './lib/agency/agents/application/ApplicationPresentation';
import AgentStyle from './lib/agency/AgentStyle';

export default class AppPresentation extends ApplicationPresentation {
    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
            ':root': {
                '--palette0': 'rgb(54, 68, 73)',
                '--palette1': 'rgb(35, 37, 39)',
                '--palette1-1': 'rgb(45, 47, 49)',
                '--palette2': 'rgb(218, 218, 218)',
                '--font-primary': 'var(--palette2)',
                '--font': 'Verdana, Geneva, Tahoma, sans-serif'
            }
        };
    }

    override initDom() {
        const root = super.initDom();
        // const root = super.initDom(),
        //     { nav, main } = htmlFactory;

        // document.body.classList.add('shell');
        // document.body.appendChild(
        //     nav({ className: 'global-nav' }, [])
        // );
        // document.body.appendChild(
        //     main({ className: 'page' })
        // );

        return root;
    }
}