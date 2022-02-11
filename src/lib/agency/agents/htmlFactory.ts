/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

export type HtmlProps<K extends keyof HTMLElementTagNameMap> = Partial<{
    [L in keyof HTMLElementTagNameMap[K]]: HTMLElementTagNameMap[K][L]
}>;

export type HtmlFactory = {
    [K in keyof HTMLElementTagNameMap]:
    (props?: HtmlProps<K>, children?: (Node | string)[]) => HTMLElementTagNameMap[K]
};

const html: HtmlFactory = new Proxy(Object.create(null), {
    get(_target, propertyName: keyof HTMLElementTagNameMap, _receiver) {
        return (props: HtmlProps<any> = {}, children: (Node | string)[] = []) => {
            const node = document.createElement(propertyName);
            Object.assign(node, props);
            children.forEach(child => {
                if (typeof child == 'string') {
                    node.appendChild(document.createTextNode(child));
                } else {
                    node.appendChild(child);
                }
            });

            return node;
        };
    }
});

export default html;