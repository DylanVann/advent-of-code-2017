module.exports = {
    'moduleFileExtensions': [
        'ts',
        'js',
    ],
    'testMatch': [
        '**/?(*.)(test).(ts|js)',
    ],
    'transform': {
        '^.+\\.(ts|js)$': '<rootDir>/preprocessor.js',
    },
}
