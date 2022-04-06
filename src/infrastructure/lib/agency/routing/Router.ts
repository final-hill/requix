/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

export type RouteHandler = (this: ThisType<Router>, url: URL) => void;

export interface RouterOptions {
    onMissingRoute: RouteHandler;
}

export default class Router {
    private _routePatterns: Map<string, RouteHandler> = new Map();
    private _missingHandler: RouteHandler;

    constructor(options: RouterOptions) {
        this._missingHandler = options.onMissingRoute;
        self.addEventListener('popstate', e => this.onPopstate(e));
    }

    mapRoute(routePattern: string, handlerName: RouteHandler): void {
        if (this._routePatterns.has(routePattern)) {
            throw new Error(`The provided route already exists: ${routePattern}`);
        }
        else {
            this._routePatterns.set(routePattern, handlerName);
        }
    }

    onPopstate(e: Event): void {
        // TODO: pattern support
        // Ref: https://github.com/jeremyruppel/as3-router
        const path = document.location.pathname,
            urlPath = new URL(path),
            handler = this._routePatterns.get(path);

        Reflect.apply(handler ?? this._missingHandler, this, [urlPath]);
    }
}