module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: '__tests__/coverage',
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
  moduleNameMapper: {
    '@eshopy/api/(.*)': '<rootDir>/src/api/$1',
    '@eshopy/middleware/(.*)': '<rootDir>/src/modules/middleware/$1',
    '@eshopy/entities': '<rootDir>/src/modules/entities',
    '@eshopy/config/(.*)': '<rootDir>/src/modules/config/$1',
    '@eshopy/exception/(.*)': '<rootDir>/src/modules/exception/$1',
    '@eshopy/(.*)': '<rootDir>/src/$1',
  },
};
