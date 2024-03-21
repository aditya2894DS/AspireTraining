module.exports = {
  root: true,
  extends: ['@react-native', "plugin:prettier/recommended"],
  rules: [
    {'space-after-keywords': ['error', 'never']},
    {
      'prettier/prettier': ['error', 'never'],
    },
  ],
};
