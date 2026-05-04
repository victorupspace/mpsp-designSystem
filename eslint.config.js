import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'storybook-static/**',
      'node_modules/**',
      '{.storybook,src/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.js', '.storybook/*.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
