module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(ts|tsx|mjs)$',
    '^.+\\.module\\.scss$',
    '^.+\\.scss$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/*.tsx',
    '!src/**/*.d.ts',
    '!src/constants',
    '!<rootDir>/node_modules/',
  ],
};
