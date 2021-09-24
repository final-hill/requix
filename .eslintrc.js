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
    'header'
  ],
  // add your custom rules here
  rules: {
    // incompatible with typescript
    'no-useless-constructor': 'off'
  }
}
