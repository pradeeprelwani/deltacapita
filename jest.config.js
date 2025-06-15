module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '\\.test\\.ts$',
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
