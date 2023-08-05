const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cleanCss = require('gulp-clean-css');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

function buildJS() {
    return browserify(['src/index.js'])
        .bundle()
        .pipe(source('src/index.js'))
        .pipe(buffer())
        .pipe(concat('editorjs-latex.bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
};

function buildCss() {
    return gulp.src(['src/style.css'])
        .pipe(concat('editorjs-latex.bundle.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('./dist'));
};

gulp.task('default', gulp.series(buildCss, buildJS));
