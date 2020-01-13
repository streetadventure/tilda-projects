var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps')

gulp.task('less',function () {
    return gulp.src('./css/less/style.less') // тут меняй /**/*.less
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync',function () {
    browserSync({
        proxy: {
            target: "http://kokos.wp/tilda-constructor/eshakti.com/",
            ws: true
        }
    })
});

gulp.task('watch',['browser-sync','less'],function () {
    gulp.watch('./css/less/**/*.less',['less']);
    gulp.watch('./index.html',browserSync.reload);
});

gulp.task('default',['watch']);