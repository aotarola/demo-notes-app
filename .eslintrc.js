module.exports = {
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  plugins: ['node', 'prettier', 'import'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, arrowParens: 'avoid' }],
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
    'object-shorthand': 'error',
    'import/newline-after-import': 'error',
    'node/no-deprecated-api': ['warn'],
  },
  env: {
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: [
          './tsconfig.json',
          './apps/*/tsconfig.json',
          './packages/*/tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/sort-type-constituents': 'error',
        'node/no-missing-import': 'off',
      },
    },
    {
      files: ['**/*.test.ts', 'vite.config.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'node/no-unpublished-import': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};
