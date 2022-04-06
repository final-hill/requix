/*!
 * @license
 * Copyright (C) 2022 Final Hill LLC
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/infrastructure/AppControl.ts',
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        path: `${__dirname}/dist`
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/infrastructure/lib/agency/template.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            extensions: ['ts'],
            fix: true
        })
    ]
};