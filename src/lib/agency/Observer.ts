/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Contract, Contracted } from '@final-hill/decorator-contracts';

// Declared to workaround <https://github.com/final-hill/decorator-contracts/issues/231>
export const observerContract = new Contract<Observer>();

@Contracted(observerContract)
export default abstract class Observer {
    handleEvent(this: Record<string, EventListener>, e: Event) {
        const name = `on${e.type[0].toUpperCase()}${e.type.substring(1)}`;
        if (this[name]) { this[name](e); }
    }
}