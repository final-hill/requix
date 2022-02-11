/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Contract, Contracted, extend, override } from '@final-hill/decorator-contracts';

import { controlContract } from '../../agent/Control';
import ContainerControl from '../container/ContainerControl';
import html from '../htmlFactory';
import PageAbstraction from './PageAbstraction';
import PagePresentation from './PagePresentation';

const pageControlContract = new Contract<PageControl>({
    // FIXME: this should be implicit
    [extend]: controlContract as Contract<PageControl>, // FIXME: interesting bug. covariance issue?
    title: {
        demands: self => self.isLoaded
    }
});

@Contracted(pageControlContract)
export default class PageControl<
    P extends PagePresentation = PagePresentation,
    A extends PageAbstraction = PageAbstraction
    > extends ContainerControl<P, A> {

    #title = '{untitled}';

    get title(): string {
        return this.#title;
    }
    set title(value: string) {
        this.#title = value;
        document.title = value;
    }

    @override
    override initAbstraction(): A {
        return new PageAbstraction() as A;
    }

    @override
    override initPresentation(): P {
        return new PagePresentation() as P;
    }

    @override
    override load(): Promise<void> {
        if (this.presentation) {
            const { elRoot, styleRules } = this.presentation!,
                style = html.style({ id: 'pageStyle' });
            document.body.appendChild(elRoot);
            document.head.appendChild(style);
            styleRules.forEach(rule => {
                style.sheet!.insertRule(rule);
            });
        }

        return super.load();
    }

    @override
    override unload(): Promise<void> {
        this.presentation?.elRoot.remove();
        const style = document.getElementById('pageStyle');
        style?.remove();

        return super.unload();
    }
}