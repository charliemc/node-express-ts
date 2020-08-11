module.exports = {
  roots: ['<rootDir>/__tests__', '<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
};
