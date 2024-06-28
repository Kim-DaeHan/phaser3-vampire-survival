module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'lastest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'symbol-description': 'off',
    'no-use-before-define': 'off',
    'dot-notation': 'off',
    'prefer-const': 'off',
    'n/no-callback-literal': 'off',
    'import/no-absolute-path': 'off',
    camelcase: 'off',
    yoda: 'off',

    // typescript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
  },
};
