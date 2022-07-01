/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { assert } from '@final-hill/decorator-contracts';
import Container from '../agents/container/Control';
import Presentation from './Presentation';
import Abstraction from './Abstraction';

/**
 * @see <https://en.wikipedia.org/wiki/Adapter_pattern>
 * @see <https://en.wikipedia.org/wiki/Mediator_pattern>
 */
class Control {
    abstraction: Abstraction = new Abstraction();
    parent?: Container;
    presentation: Presentation = new Presentation();

    get hasParent(): boolean {
        return this.parent != undefined;
    }

    get isAttached(): boolean {
        return this.hasParent && this.parent!.isAttached;
    }

    get isHidden(): boolean {
        return this.presentation.isHidden;
    }
    set isHidden(value: boolean) {
        this.presentation.isHidden = value;
    }

    hide(): void {
        this.presentation.hide();
    }

    onAttached(): void {
        this.abstraction.onAttached();
        this.presentation.onAttached();
    }

    onDetached(): void {
        this.abstraction.onDetached();
        this.presentation.onDetached();
    }

    remove(): void {
        assert(this.hasParent, 'The control must have a parent before it can be removed');
        this.parent!.removeChild(this);
    }

    show(): void {
        this.presentation.show();
    }
}

/**
 * TODO: Enable NewtonScript style Comb Inheritance through the parent property
 */
const agentHandler: ProxyHandler<any> = {
    get(target, propertyKey, receiver) {
        if (Reflect.has(target, propertyKey)) {
            return Reflect.get(target, propertyKey, receiver);
        } else if (target.parent && Reflect.has(target.parent, propertyKey)) {
            return Reflect.get(target.parent, propertyKey, target.parent);
        } else {
            throw new Error(`No such property: ${String(propertyKey)}`);
        }
    }
};

export default Control;