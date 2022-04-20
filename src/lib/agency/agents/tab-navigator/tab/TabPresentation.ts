/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../../../AgentStyle';
import htmlFactory from '../../../htmlFactory';
import ContainerPresentation from '../../container/ContainerPresentation';

export interface TabPresentationControls {
    onClick?: (e: Event) => void;
}

export default class TabPresentation extends ContainerPresentation {
    override readonly elRootType!: HTMLLabelElement;

    private _onClick?: (e: Event) => void;

    constructor(options: TabPresentationControls = {}) {
        super();
        this._onClick = options.onClick;
        if (this._onClick) {
            this.elRoot.addEventListener('click', this._onClick);
        }
    }

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
                alignItems: 'center',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: ''
            },
            '.tab .feather-icon': {
                marginRight: '0.2in'
            }
        };
    }
}