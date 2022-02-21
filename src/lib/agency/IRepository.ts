/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

export default interface Repository<T> {
    create(entity: T): void;
    read(where: (entity: T) => boolean): T[];
    update(where: (entity: T) => boolean, action: (entity: T) => T): void;
    delete(where: (entity: T) => boolean): void;
}