/* eslint-env node */
module.exports = {
  root: true,
  // NOTE
  env: {
    browser: true, // NOTE Set to false if you're not using this in a browser environment
    es2021: true,
    node: true, // NOTE This line informs ESLint about the Node.js globals
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],

  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    'no-unused-vars': 1,
    'no-console': 'warn',
    'no-debugger': 'warn',
    'space-before-function-paren': [1, 'never'],
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 'off'
  }
}
