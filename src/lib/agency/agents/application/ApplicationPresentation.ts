/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../../AgentStyle';
import AgentTheme from '../../AgentTheme';
import ContainerPresentation from '../container/ContainerPresentation';

export interface ApplicationPresentationOptions {
    theme?: AgentTheme;
}

export default class ApplicationPresentation extends ContainerPresentation {
    override readonly elRootType!: HTMLBodyElement;

    constructor(options: ApplicationPresentationOptions = {}) {
        super();
    }

    override initDom(): this['elRootType'] { return document.body as HTMLBodyElement; }

    override initStyle(): AgentStyle {
        return {
            'html, body': {
                height: '100%',
                margin: '0',
                padding: '0'
            }
        };
    }
}