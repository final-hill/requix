/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { override } from '@final-hill/decorator-contracts';
import Abstraction from '../../agent/Abstraction';
import Control from '../../agent/Control';
import ContainerPresentation from './ContainerPresentation';

// TODO: is every Agent a container?
// TODO: introduce Slots
export default class ContainerControl<
    P extends ContainerPresentation, A extends Abstraction
    > extends Control<P, A> {

    @override
    override addChild(child: Control): void {
        this.presentation.addChild(child.presentation);
        super.addChild(child);
    }

    @override
    override removeChild(child: Control): void {
        this.presentation.removeChild(child.presentation);
        super.removeChild(child);
    }
}