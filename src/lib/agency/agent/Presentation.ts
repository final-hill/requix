/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import AgentStyle from '../AgentStyle';
import htmlFactory from '../htmlFactory';
import StyleManager from '../StyleManager';
import { assert } from '../util';

class Presentation {
    elRoot: HTMLElement | SVGElement = htmlFactory.div();
    readonly styleManager = new StyleManager();

    get isHidden(): boolean {
        assert(this.elRoot != undefined, 'No element is associated with this presentation');

        return this.elRoot.classList.contains('is-hidden');
    }
    set isHidden(value: boolean) {
        assert(this.elRoot != undefined, 'No element is associated with this presentation');
        this.elRoot.classList.toggle('is-hidden', value);
    }

    get styleRules(): AgentStyle {
        return {
            '.is-hidden': {
                display: 'none'
            }
        };
    }

    attachStyles(): void {
        const { styleRules } = this;

        for (const selector in styleRules) {
            const body = styleRules[selector];
            if (typeof body != 'function') {
                this.styleManager.addRule(selector, body);
            }
        }
    }

    detachStyles() {
        this.detach();
        const { styleRules } = this;
        for (const selector in styleRules) {
            this.styleManager.removeRule(selector);
        }
    }

    hide(): void {
        this.isHidden = true;

    }

    onAttached(): void {
        this.attachStyles();
    }

    onDetached(): void {
        this.detachStyles();
    }

    detach(): void {
        assert(this.elRoot != undefined, 'presentation is already removed');
        this.elRoot.remove();
    }

    show(): void {
        this.isHidden = false;
    }
}

export default Presentation;