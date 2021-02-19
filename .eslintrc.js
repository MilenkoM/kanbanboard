module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
        'node': {
            'paths': ['src'],
            'extensions': ['.js', '.ts', '.d.ts','.jsx','.tsx']
        },
    },
  },   
  rules: { 'import/extensions': [
    'error',
    'ignorePackages',
    {
      'js': 'never',
      'jsx': 'never',
      'ts': 'never',
      'tsx': 'never'
    }
 ],
 'import/prefer-default-export': 'off',
 'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define' : 'off',
    '@typescript-eslint/no-use-before-define': 'warn' }, 
};
