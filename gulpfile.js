'use strict'
let gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

gulp.task('connect', () => {
    connect.server({
        livereload: true,
        port: 3000
    });
});

gulp.task('jade', () => {
    gulp.src('./jade/main.jade')
        .pipe( plumber() )
        .pipe( jade() )
        .pipe( rename('index.html') )
        .pipe( gulp.dest('./') )
        .pipe( connect.reload() );
});

gulp.task('watch', () => {
    gulp.watch('**/*.*', ['jade']);
});

gulp.task('default', ['connect', 'watch']);
