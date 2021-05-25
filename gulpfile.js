let preprocessor = 'sass';

const { 
    src, 
    dest, 
    parallel, 
    series, 
    watch 
} = require('gulp');


const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');

function browsersync() {
	browserSync.init({
		proxy: {
            target: "http://vicso",
            ws: true
        },
		notify: false, 
		online: true
	})
}

function scripts() {
	return src([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/owl.carousel/dist/owl.carousel.js',
		'node_modules/glightbox/dist/js/glightbox.js',
		'node_modules/isotope-layout/dist/isotope.pkgd.js',
		'../themes/rutrum/js/app.js',
		])
	.pipe(concat('app.min.js'))
	.pipe(uglify())
	.pipe(dest('../themes/rutrum/js'))
	.pipe(browserSync.stream())
}

function styles() {
	return src('../themes/rutrum/css/' + preprocessor + '/main.' + preprocessor + '')
	.pipe(eval(preprocessor)()) 
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(cleancss( { level: { 1: { specialComments: 0 } } } )) 
	.pipe(dest('../themes/rutrum/css/'))
	.pipe(browserSync.stream())
}

function startwatch() {
	watch(['../themes/rutrum/js/**/*.js', '!../themes/rutrum/js/**/*.min.js'], scripts);
    watch(['../themes/rutrum/css/sass/*.sass'], styles).on("change", browserSync.reload);
    watch(['../themes/rutrum/*.php']).on("change", browserSync.reload);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;

exports.default = parallel(styles, scripts, browsersync, startwatch);