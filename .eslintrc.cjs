module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended', // 기본 ESLint 규칙
    'plugin:@typescript-eslint/recommended-type-checked', // TypeScript 기본 규칙
    'plugin:@typescript-eslint/stylistic-type-checked', // TypeScript 스타일 규칙
    'plugin:react/recommended', // React 기본 규칙
    'plugin:react-hooks/recommended', // React Hooks 규칙
    'plugin:react/jsx-runtime', // React 18+ JSX runtime 설정
    'plugin:prettier/recommended', // Prettier 규칙 적용
  ],
  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
};
