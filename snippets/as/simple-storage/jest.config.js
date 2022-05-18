module.exports = {
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/__tests__/e2e/**/?(*.)+(spec|test).[jt]s?(x)"],
  modulePathIgnorePatterns: [],
  globals: {
    'ts-jest': {
      tsconfig: "tsconfig.ts.json",
      diagnostics: false
    }
  }
};
