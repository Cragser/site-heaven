/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@client/(.*)$': '<rootDir>/src/client/$1',
    '^@components/(.*)$': '<rootDir>/src/client/components/$1',
    '^@contexts/(.*)$': '<rootDir>/src/client/contexts/$1',
    '^@providers/(.*)$': '<rootDir>/src/shared/providers/$1',
    '^@lib/(.*)$': '<rootDir>/src/domain/$1',
    '^@modules/(.*)$': '<rootDir>/src/client/modules/$1',
    '^@page/types/(.*)$': '<rootDir>/src/client/types/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
