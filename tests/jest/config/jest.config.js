const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../..'),
  transform: {
    '^.+\\.(jsx?|tsx?)$': './tests/jest/config/jest.transform.js',
  },
  testMatch: [
    '**/tests/jest/**/*.spec.(js|ts|tsx)',
  ],
  testEnvironment: 'jsdom',
  // coverageReporters: ['html', 'text'],
  // coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  transformIgnorePatterns: ['node_modules'],
  // testResultsProcessor: 'jest-teamcity',
  moduleNameMapper: {
    '.+\\.(css|scss|svg)$': 'identity-obj-proxy',
  },
  setupFiles: ['./tests/jest/config/jest.setup.js'],
  // coverageDirectory: path.resolve(__dirname, '../../../coverage'),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
