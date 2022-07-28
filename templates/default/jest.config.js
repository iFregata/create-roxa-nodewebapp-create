/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
  },
  setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/src/test/setup.ts'],
  testRegex: '/test/.*\\.spec\\.(js|ts)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testTimeout: 100000,
};
