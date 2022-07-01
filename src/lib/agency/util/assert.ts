/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

/**
 * An assertion is an expression of a property that must be true at a particular
 * point of step of program execution. It consists of a boolean expression
 * and a message. This function tests the provided condition. If the condition
 * is false an AssertionError is raised with an optional message.
 * If the provided condition is true then the function returns without raising an error
 *
 * @param {boolean} condition - The condition to test
 * @param {string} message - A descriptive message to associate with the AssertionError
 * @throws {Error} - When the condition is false
 */
export default function assert(condition: unknown, message: string): asserts condition {
    if (Boolean(condition) == false) {
        throw new Error(message);
    }
}