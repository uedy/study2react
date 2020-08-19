module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  rules: {
    'import/prefer-default-export': 0,
    "@typescript-eslint/no-use-before-define": 0, // 範囲は大きいけれど、関数の順番を変えるだけなので安全にできるはず
  }
};
