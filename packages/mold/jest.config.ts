const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {
    d3: '<rootDir>/../../node_modules/d3/dist/d3.min.js',
    '^d3-(.*)$': '<rootDir>/../../node_modules/d3-$1/dist/d3-$1.min.js',
  },
}

module.exports = createJestConfig(customJestConfig)
