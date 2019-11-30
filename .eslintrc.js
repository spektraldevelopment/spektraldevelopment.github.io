module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "indent": "off",
    "vue/html-indent": "off",
    "eol-last": "off",
    "comma-dangle": "off",
    "vue/singleline-html-element-content-newline" : "off",
    "vue/html-self-closing": "off",
    "space-before-function-paren": "off",
    "semi": "off",
    "quotes": "off",
    "vue/max-attributes-per-line": "off"
  }
}
