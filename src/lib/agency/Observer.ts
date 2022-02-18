/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

export default abstract class Observer {
    handleEvent(this: Record<string, EventListener>, e: Event) {
        const name = `on${e.type[0].toUpperCase()}${e.type.substring(1)}`;
        if (this[name]) { this[name](e); }
    }
}