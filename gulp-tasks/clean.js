'use strict';

var merge = require('merge');
var del = require('del');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    target: './www/'
};

module.exports = function (gulp, options) {
    return function() {
        options = merge(defaultOptions, options);
        return del(options.target);
    }
};