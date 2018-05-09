var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var babel = require("gulp-babel")

devBuild = (process.env.NODE_ENV !== 'production')

foldersder ={
src: 'src/',
build: 'build/'
};
'src/'

gulp.task('html', function () {
    return gulp.src('client/templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/html'))
});


gulp.task('css', function () {
    return gulp.src('client/templates/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});

gulp.task('js', function () {
    return gulp.src('client/javascript/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
});

gulp.task('compile-es6', function () {
    gulp.src('./ES6/one.es6.js')
        .pipe(babel())
        .pipe(gulp.dest('path/to/destination'));
});

gulp.task('default', ['html', 'css', 'js']);

module.export = gulp;QQ
