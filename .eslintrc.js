// eslint rule settings
const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  plugins: ['react-hooks', 'chai-friendly'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'import/order': WARN,
    'react/jsx-handler-names': WARN,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    camelcase: OFF,
    '@typescript-eslint/camelcase': [ERROR, { properties: 'never' }]
  },
  overrides: [
    {
      // Typescript
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-use-before-define': OFF,
        'react/prop-types': OFF
      }
    },
    {
      // Test files
      files: ['*.spec.ts', '*.spec.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': OFF,
        '@typescript-eslint/no-unused-expressions': OFF,
        'chai-friendly/no-unused-expressions': ERROR
      }
    }
  ]
};
