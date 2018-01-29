var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var uglify      = require('gulp-uglifyjs');
var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var webpack     = require('gulp-webpack');

var JS_SOURCE   = 'src/js/**/*.js';
var CSS_SOURCE  = 'src/css/**/*.css';

gulp.task('jshint', function () {
    gulp.src(JS_SOURCE)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
    gulp.src('build/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function () {
    gulp.src(CSS_SOURCE)
        .pipe(concat('styles.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('webpack', function () {
    webpack(require('./webpack.config.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['jshint', 'webpack', 'uglify', 'styles']);

gulp.task('watch', function () {
     // watch JS
    gulp.watch(JS_SOURCE, ['jshint', 'webpack', 'uglify']);

    // watch CSS
    gulp.watch(CSS_SOURCE, ['styles']);
});
