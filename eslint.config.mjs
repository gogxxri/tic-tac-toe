import babelParser from '@babel/eslint-parser';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      react: (await import('eslint-plugin-react')).default,
    },
    rules: {
      // ...
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

];
