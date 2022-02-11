/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Contract, Contracted, extend, override } from '@final-hill/decorator-contracts';
import html from '../agents/htmlFactory';
import Observable, { observableContract } from '../Observable';

const abstractionContract = new Contract<Abstraction>({
    [extend]: observableContract
});

@Contracted(abstractionContract)
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