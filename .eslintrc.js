module.exports = {
  'env': {
    'es2021': true,
    'node': true,
    'mocha': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'no-console': [
      'error',
      { 'allow': ['warn', 'error'] }],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eol-last': [
      'error',
      'always'
    ],
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
