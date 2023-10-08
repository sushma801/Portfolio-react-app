
module.exports = {
    collectCoverage: true,
    setupFiles: ['./jest.mockGlobals.ts'],
    collectCoverageFrom: ['src/**/*.{js,jsx, ts,tsx}'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageReporters: ['text'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            babelConfig: true,
            tsconfig: 'tsconfig.json'
        }
    },
    coverageThreshold: {
        global: {
            branches: 70,
            function: 85,
            lines: 85,
            statements: 80
        }
    }
}