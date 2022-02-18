/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import html from '../agents/htmlFactory';
import Observable from '../Observable';

export default class Abstraction extends Observable {
    #eventTarget = html.div();

    override get eventTarget(): HTMLElement {
        return this.#eventTarget;
    }

    notifyChange<K extends keyof this, V extends this[K]>(fieldName: K, newValue: V) {
        this.eventTarget.dispatchEvent(
            new CustomEvent('abstractionChange', {
                detail: { [fieldName]: newValue }
            })
        );
    }
}