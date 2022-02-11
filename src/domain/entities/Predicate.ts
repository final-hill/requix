/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

/**
 * A true or false expression dependent on a particular context
 */
type Predicate = (x: any) => boolean;

export default Predicate;