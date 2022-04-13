/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */


const kebab = (text: string) =>
    text.replace(
        /[a-z][A-Z]/g,
        ($0: string) => `${$0[0]}-${$0[1].toLowerCase()}`
    );

export default kebab;