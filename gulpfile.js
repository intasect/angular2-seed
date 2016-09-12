'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('clean', require('./gulp-tasks/clean')(gulp));
gulp.task('format', require('./gulp-tasks/format')(gulp));
gulp.task('build-index', require('./gulp-tasks/build-index')(gulp));
gulp.task('build-sass', require('./gulp-tasks/build-sass')(gulp, browserSync));
gulp.task('build-html', require('./gulp-tasks/build-html')(gulp));
gulp.task('build-typescript', require('./gulp-tasks/build-typescript')(gulp));
gulp.task('build-asset', require('./gulp-tasks/build-asset')(gulp));
gulp.task('serve', require('./gulp-tasks/serve')(gulp, browserSync));

gulp.task('watch', require('./gulp-tasks/watch')(gulp, browserSync, ['build']));

gulp.task('start', function (done) {
  runSequence('build',
    'serve',
    'watch',
    done);
});

gulp.task('build', function (done) {
  runSequence('clean',
    'build-sass',
    'build-html',
    'build-typescript',
    'build-asset',
    'build-index',
    done);
});