var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

gulp.task('clean', async function(){
	del.sync('dist')
});


gulp.task('scss', function(){
	return gulp.src('app/scss/**/*.scss')
	//.pipe(sass({outputStyle: 'expanded'})) //Перевод в css - не сжатый
	.pipe(sass({outputStyle: 'compressed'}))//Перевод в сжатый css из scss
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 8 versions']
	}))
	.pipe(rename({suffix: ".min"}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});


gulp.task('html', function(){
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
	return gulp.src('app/js/*.js')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function(){
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		//'node_modules/slick-carousel/slick/slick.css',
		//'node_modules/animate.css/animate.css',
		'node_modules/swiper/css/swiper.min.css',
		'node_modules/bootstrap/dist/css/bootstrap.min.css',

		'node_modules/magnific-popup/dist/magnific-popup.css'
		])
	.pipe(concat('_libs.scss'))
	.pipe(gulp.dest('app/scss'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
	return gulp.src([
		//'node_modules/slick-carousel/slick/slick.js',
		'node_modules/bootstrap/dist/js/bootstrap.js',
		//'node_modules/swiper/js/swiper.js',
		'app/js/swiper.min.js',
		'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js')) 
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('export', function(){
var buildHtml = gulp.src('app/**/*.html')
.pipe(gulp.dest('dist'));

var buildCss = gulp.src('app/scss/**/*.scss')
.pipe(gulp.dest('dist/css'));

var buildJs = gulp.src('app/js/**/*.js')
.pipe(gulp.dest('dist/js'));

var buildImg = gulp.src('app/img/**/*.*')
.pipe(gulp.dest('dist/img'));

var buildFonts = gulp.src('app/fonts/**/*.')
.pipe(gulp.dest('dist/fonts'));

});

gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
	gulp.watch('app/*.html', gulp.parallel('html'));
	gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('build', gulp.series('clean','export'));

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'script', 'browser-sync', 'watch'));