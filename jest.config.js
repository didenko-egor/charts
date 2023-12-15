module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/js-with-babel',
  setupFiles: ["./jest.setup.js"],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '<rootDir>/packages/**/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  transformIgnorePatterns: [
    '/*.s?css$'
  ],
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/*.s?css$',
    '/cypress/'
  ],
  moduleNameMapper: {
    '/*.s?css$': 'identity-obj-proxy',
    '^styles/(.*)': '<rootDir>/src/styles/$1',
    '^types/(.*)': '<rootDir>/src/types/$1',
    '^pages/(.*)': '<rootDir>/src/pages/$1',
    '^__mocks__/(.*)': '<rootDir>/src/__mocks__/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^shared$': '<rootDir>/src/shared/index.ts',
    '^shared/(.*)': '<rootDir>/src/shared/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    '^utils$': '<rootDir>/src/utils/index.ts',
    '^store/(.*)': '<rootDir>/src/store/$1',
    '^store$': '<rootDir>/src/store/index.ts',
    '^types': '<rootDir>/src/types/index.ts',
    '^constants/(.*)': '<rootDir>/src/constants/$1',
    '^modules/(.*)': '<rootDir>/src/modules/$1',
    '^classes/(.*)': '<rootDir>/src/classes/$1',
    '^hoc/(.*)': '<rootDir>/src/hoc/$1',
    '^hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^dnd/(.*)': '<rootDir>/src/dnd/$1',
    '^dnd$': '<rootDir>/src/dnd/index.ts'
  },
  globals: {
    "APP_ENV": 'development',
    "NODE_ENV": 'development'
  },
  roots: ['./__tests__']
};
