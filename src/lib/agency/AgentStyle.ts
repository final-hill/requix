/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

type StyleRule = Partial<CSSStyleDeclaration | { [key: string]: string }>;

type AgentStyle = Record<string, StyleRule>;

export type { AgentStyle, StyleRule };