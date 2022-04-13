/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../../../AgentStyle';
import htmlFactory from '../../../htmlFactory';
import ContainerPresentation from '../../container/ContainerPresentation';

export default class TabPresentation extends ContainerPresentation {
    override readonly elRootType!: HTMLLabelElement;

    get isActive(): boolean {
        return this.elRoot.classList.contains('is-active');
    }

    set isActive(value: boolean) {
        this.elRoot.classList.toggle('is-active', value);
    }

    override initDom(): this['elRootType'] {
        return htmlFactory.label({ className: 'tab' });
    }

    override initStyle(): AgentStyle {
        return {
            ...super.initStyle(),
            '.tab': {
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row'
            }
        };
    }
}