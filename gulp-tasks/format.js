'use strict';

var merge = require('merge');
var path = require('path');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {

  typescriptSource: [
    './src/*.ts',
    './src/**/*.ts'
  ],
  otherSource: [
    './src/*.html',
    './src/*.scss',
    './src/**/*.html',
    './src/**/*.scss',
  ]
};


module.exports = function (gulp, options) {
  return function () {
    options = merge(defaultOptions, options);
    gulp.src(options.typescriptSource)
      .pipe(plugins.changedInPlace())
      .pipe(plugins.tsfmt())
      .pipe(gulp.dest('./src'));
    gulp.src(options.otherSource, { base: 'client' })
      .pipe(plugins.jsbeautifier(
        {
          indent_level: 4,
          indent_char: ' '
        }
      ))
      .pipe(plugins.jsbeautifier.reporter())
      .pipe(gulp.dest('./src'));
  }
};