module.exports = {
  collectCoverage: true,
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './setupTests.js',
  ],
};
