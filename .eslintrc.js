module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0,
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    'import/no-duplicates': 0,
    'no-mixed-operators': 0,
    'no-constant-condition': 0,
    'prefer-const': 0,
    'eqeqeq': 0
  }
}
