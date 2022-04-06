/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import ContainerControl, { ContainerControlOptions } from '../container/ContainerControl';
import PanelPresentation from './PanelPresentation';

export interface PanelControlOptions extends ContainerControlOptions {
    title: string;
}

export default class PanelControl extends ContainerControl {
    static override readonly styleId: string = 'PanelControl';

    override readonly presentationType!: PanelPresentation;

    private _title!: string;

    constructor(options: PanelControlOptions) { super(options); }

    /**
     * The header title for the panel
     */
    get title() {
        return this._title;
    }
    set title(value: string) {
        this._title = this.presentation!.title = value;
    }

    override init(options: PanelControlOptions): void {
        super.init(options);
        this._title = options.title;
    }

    override initPresentation(): this['presentationType'] {
        return new PanelPresentation();
    }

    override onAttached(): void {
        super.onAttached();
        this.title = this._title;
    }
}