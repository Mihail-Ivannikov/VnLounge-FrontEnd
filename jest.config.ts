import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Handle .ts and .tsx files
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // For CSS modules or styles
  },
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)', // Match test files with .ts, .tsx extensions
  ],
  preset: 'ts-jest',
  resetMocks: true,
  verbose: true,
};

export default config;
