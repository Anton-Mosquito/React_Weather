/* ESLint flat config for ESLint v9+ (refactored) */
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  // Global ignores
  {
    ignores: ['node_modules/**', 'build/**', 'dist/**', 'public/**', '.cache/**', '.git/**'],
  },

  // Apply to JS/TS files
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      // Formatting
      'prettier/prettier': 'error',

      // React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  }
];
