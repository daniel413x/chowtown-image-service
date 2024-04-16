module.exports = {
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
    ],
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
};
