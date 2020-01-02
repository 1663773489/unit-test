

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'sinon-chai'],
        client: {
            chai: {
                includeStack: true
            }
        },
        files: [
            'dist/**/*.test.js',
            'dist/**/*.test.css'
        ],//告诉karma测试用例在哪里
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        browsers: ['ChromeHeadless'],
        port: 9868,
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: false,
        autoWatch: true,
        concurrency: Infinity


    })
}
