module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^entities/(.*)$': '<rootDir>/src/entities/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^shared/(.*)$': '<rootDir>/src/shared/$1',
    '^features/(.*)$': '<rootDir>/src/features/$1',
    '^widgets/(.*)$': '<rootDir>/src/widgets/$1'
  }
};
