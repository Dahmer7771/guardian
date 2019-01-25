'use strict';

var gulp            = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins')();

// gulp.task('pug', function () {
//     return gulp.src('src/pug/pages/*.pug')
//     .pipe(gulpLoadPlugins.pug({
//         pretty:true
//     }))
//     .pipe(gulp.dest('build'));
// });

gulp.task('less', function () {
    return gulp.src('src/static/less/styles.less')
    .pipe(gulpLoadPlugins.less())
    .pipe(gulpLoadPlugins.less({
        pretty: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('compress', function() {
    gulp.src('src/static/images/*.png')
    .pipe(gulpLoadPlugins.imagemin())
    .pipe(gulp.dest('build/images'))
});

gulp.task('watch', function () {
    // gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/static/less/**/*.less', gulp.series('less'));
    gulp.watch('src/static/images/*.png', gulp.series('compress'));
});

gulp.task('default', gulp.series(
    gulp.parallel('less', 'compress'),'watch'
));