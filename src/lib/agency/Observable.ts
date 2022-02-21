/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import Observer from './Observer';

export default abstract class Observable {
    abstract get eventTarget(): Element;

    dispatchEvent(event: Event) {
        this.eventTarget.dispatchEvent(event);
    }

    addEventListener(eventName: string, observer: Observer) {
        this.eventTarget.addEventListener(eventName, observer);
    }

    removeEventListener(eventName: string, observer: Observer) {
        this.eventTarget.removeEventListener(eventName, observer);
    }
}