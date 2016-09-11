'use strict';

var merge = require('merge');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    source: ['./src/index.html'],
    target: './www/',
    externalSource: [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js'
    ],
    externalTarget: './www/lib/',
    injectSource: [
        './www/lib/**.js',
        './www/js/**.js',
        './www/css/**.css',
    ]
};

module.exports = function (gulp, options) {
    return function () {
        options = merge(defaultOptions, options);

        return gulp.src(options.externalSource)
            .pipe(gulp.dest(options.externalTarget))
            .on('end', function () {
                gulp.src(options.source)
                    .pipe(plugins.inject(gulp.src(options.injectSource, {
                        read: false
                    }), {
                        ignorePath: 'www',
                        addRootSlash: false 
                    }))
                    .pipe(gulp.dest(options.target));
            });

    }
};