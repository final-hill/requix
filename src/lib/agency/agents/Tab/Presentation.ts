/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import htmlFactory from '../../htmlFactory';
import ContainerPresentation from '../container/Presentation';

class TabPresentation extends ContainerPresentation {
    override elRoot: HTMLLabelElement = htmlFactory.label({ classList: ['tab'] });
    get isActive(): boolean {
        return this.elRoot.classList.contains('is-active');
    }
    set isActive(value: boolean) {
        this.elRoot.classList.toggle('is-active', value);
    }
    override get styleRules() {
        return {
            ...super.styleRules,
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

export default TabPresentation;