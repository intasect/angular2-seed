'use strict';

var merge = require('merge');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    target: [
        './src/**',
        '!./src/*.scss',
        '!./src/**/*.scss',
    ],
    scssTarget: [
        './src/*.scss',
        './src/**/*.scss',
    ]
};

module.exports = function (gulp, browserSync, tasks, options) {
    return function () {
        options = merge(defaultOptions, options);
        plugins.watch(options.target, function () {
            runSequence(tasks, function () {
                browserSync.reload();
            });
        })
        plugins.watch(options.scssTarget, function () {
            runSequence('build-sass', function () {
            })
        })
    }
};