/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Contract, Contracted } from '@final-hill/decorator-contracts';
import Observer from './Observer';


// Declared to workaround <https://github.com/final-hill/decorator-contracts/issues/231>
export const observableContract = new Contract<Observable>();

@Contracted(observableContract)
export default abstract class Observable {
    abstract get eventTarget(): HTMLElement;

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