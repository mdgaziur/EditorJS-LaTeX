const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel');

function buildJS() {
    return gulp.src(['src/index.js'])
        .pipe(concat('editorjs-latex.bundle.js'))
        .pipe(babel({
            "presets": ["@babel/env"]
        }))
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