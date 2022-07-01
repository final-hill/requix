/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

export type SvgProps<K extends keyof SVGElementTagNameMap> = Partial<Omit<{
    [L in keyof SVGElementTagNameMap[K]]: SVGElementTagNameMap[K][L]
}, 'classList'> & { classList: string[] }>;

export type SvgFactory = {
    [K in keyof SVGElementTagNameMap]:
    (props?: SvgProps<K>, children?: (Node | string)[]) => SVGElementTagNameMap[K]
};

const xmlnsSvg = 'http://www.w3.org/2000/svg',
    svgFactory: SvgFactory = new Proxy(Object.create(null), {
        get(_target, propertyName: keyof SVGElementTagNameMap, _receiver) {
            return (props: SvgProps<any> = {}, children: (Node | string)[] = []) => {
                const node = document.createElementNS(xmlnsSvg, propertyName),
                    classList = props.classList ?? [];
                delete props.classList;
                Object.assign(node, props);
                classList.forEach(cls => node.classList.add(cls));
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