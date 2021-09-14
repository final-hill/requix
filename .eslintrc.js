module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    "header"
  ],
  // add your custom rules here
  rules: {
    "header/header": [2, "block", [
      "!",
      " * @license",
      " * Copyright (C) 2021 Final Hill LLC",
      " * SPDX-License-Identifier: AGPL-3.0-only",
      " * @see <https://spdx.org/licenses/AGPL-3.0-only.html>",
      " "
    ]]
  }
}
