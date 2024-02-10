module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'], // <-- only if we need to create the `jest.setup.js` file 
    transformIgnorePatterns: [],
}