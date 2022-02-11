/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Contract, Contracted } from '@final-hill/decorator-contracts';
import Constructor from '../../Constructor';
import MissingPageControl from '../page/MissingPage/MissingPageControl';
import PageControl from '../page/PageControl';

export interface RouteType {
    path: string;
    control: Constructor<PageControl>;
}

const routerContract = new Contract<Router>({
    addRoute: {
        demands: (self, route) => !self.routes.has(route.path),
        ensures: (self, _old, route) => self.routes.has(route.path)
    }
});

@Contracted(routerContract)
export default class Router {
    #routes: Map<string, Constructor<PageControl>> = new Map();

    constructor(...routes: RouteType[]) {
        routes.forEach(({ path, control }) => {
            this.addRoute({ path, control });
        });
    }

    get routes() {
        return Object.freeze(this.#routes);
    }

    addRoute(route: RouteType) {
        this.#routes.set(route.path, route.control);
    }

    route(path: string) {
        history.pushState(null, '', path);

        return this.#routes.get(path) ?? MissingPageControl;
    }
}