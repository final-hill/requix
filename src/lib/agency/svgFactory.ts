/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

export type SvgProps<K extends keyof SVGElementTagNameMap> = Partial<{
    [L in keyof SVGElementTagNameMap[K]]: SVGElementTagNameMap[K][L]
}>;

export type SvgFactory = {
    [K in keyof SVGElementTagNameMap]:
    (props?: SvgProps<K>, children?: (Node | string)[]) => SVGElementTagNameMap[K]
};

const xmlnsSvg = 'http://www.w3.org/2000/svg',
    svgFactory: SvgFactory = new Proxy(Object.create(null), {
        get(_target, propertyName: keyof SVGElementTagNameMap, _receiver) {
            return (props: SvgProps<any> = {}, children: (Node | string)[] = []) => {
                const node = document.createElementNS(xmlnsSvg, propertyName);
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

export default svgFactory;