const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const webp = require('gulp-webp');
const sourcemaps = require('gulp-sourcemaps');

function browsersync() {
    browserSync.init({
        proxy: "hudi",
        notify: true,
        online: false
    })
}

function scriptsIndex() {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        //'node_modules/owl.carousel2/dist/owl.carousel.min.js',
        'js/intlTelInput/intlTelInput.min.js',
        'js/jquery.maskedinput.min.js',
        'js/owl.carousel.min.js',
        //'js/main.js',
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('js/'))
        .pipe(browserSync.stream())
}

function scripts() {
    scriptsIndex()
}
function styles() {
    return src('scss/*.min.scss')
        .pipe(sourcemaps.init({ largeFile: true }))
        .pipe(sass())
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
        .pipe(sourcemaps.write('/'))
        .pipe(dest('css/'))
        .pipe(browserSync.stream())
}

function images() {
    return src('img/src/**/*')
        .pipe(imagemin())
        .pipe(dest('img/'))
        .pipe(webp({ quality: 90 }))
        .pipe(dest('img/'))
}

function startwatch() {
    watch(['**/*.js', '!**/*.min.js'], scripts);
    watch('scss/**/*', styles);
    watch('**/*.html').on('change', browserSync.reload);
    watch('**/*.php').on('change', browserSync.reload);
    watch('img/src/**/*', images);
}
function cleandist() {
    return del('www/**/*', { force: true })
}
function buildcopy() {
    return src([
        'css/**/*.min.css',
        'js/**/*.min.js',
        'img/**/*',
        '!img/src/**/*',
        'video/**/*',
        'fonts/**/*',
        '**/*.html',
        '**/*.php',
        '**/.htaccess',
    ], { base: 'app' })
        .pipe(dest('www'))
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.default = parallel(styles);
exports.build = series(cleandist, styles, scripts, images, buildcopy);
