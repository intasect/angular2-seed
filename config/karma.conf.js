var webpackConfig = require('./webpack.test.config');

module.exports = function (config) {
    config.set({
        //logLevel: config.LOG_DEBUG,
        files: [
            './karma-test-shim.js'
            //{ pattern: './karma-test-shim.js', watched: false },
            //{ pattern: '../app/**/!(*-spec).ts', include: false, watched: false }
        ],
        autoWatch: true,
        singleRun: false,
        frameworks: ['jasmine'],
        //browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        browsers: ['PhantomJS'],
        reporters: ['mocha', 'coverage', 'karma-remap-istanbul', 'html'],
        preprocessors: {
            './karma-test-shim.js': ['webpack', 'sourcemap'],
            //'../app/**/!(*-spec).ts': ['karma-typescript']
            //'../app/**/!(*-spec).ts': ['karma-typescript']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        // optionally, configure the reporter
        coverageReporter: {
            dir: 'coverage',
            file: 'coverage.json',
            subdir: 'json',
            type: 'json'
        },
        remapIstanbulReporter: {
            src: 'coverage/json/coverage.json',
            reports: {
                html: 'coverage/html',
                lcovonly: 'coverage/lcov/coverage.lcov',
                text: null
            },
            timeoutNotCreated: 5000, // default value
            timeoutNoMoreFiles: 5000 // default value
        }
        /*
        htmlReporter: {
            outputDir: '../test/',
            templatePath: null, // set if you moved jasmine_template.html 
            focusOnFailures: true, // reports show failures on start 
            namedFiles: false, // name files instead of creating sub-directories 
            pageTitle: null, // page title for reports; browser info by default 
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
            reportName: 'report-summary-filename', // report summary filename; browser info by default 


            // experimental 
            preserveDescribeNesting: false, // folded suites stay folded  
            foldAll: false, // reports start folded (only with preserveDescribeNesting) 
        }
        */
    });
};