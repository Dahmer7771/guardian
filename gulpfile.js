'use strict';

const gulp = require('gulp');

const concat = require('gulp-concat');  // объединяет файлы в один бандл
const minifyCSS = require('gulp-minify-css');  // сжимает, оптимизирует
const rename = require("gulp-rename");  // переименовывает

gulp.task('less', function () {
    gulp.src('./*.less')
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())   
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('./css'));
    });