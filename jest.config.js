/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  roots: ['<rootDir>/tests/'],
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
  ],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  moduleNameMapper: {
    "@pr/(.+)": "<rootDir>/src/presentation/$1",
    "@app/(.+)": "<rootDir>/src/application/$1",
    "@domain/(.+)": "<rootDir>/src/domain/$1",
    "@infra/(.+)": "<rootDir>/src/infra/$1",
    "@tests/(.+)": "<rootDir>/tests/$1",
    "@mocks/(.+)": "<rootDir>/tests/mocks/$1",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};