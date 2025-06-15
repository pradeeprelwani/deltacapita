module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'], // ✅ includes all files recursively
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '\\.test\\.ts$', // ignores test files
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
