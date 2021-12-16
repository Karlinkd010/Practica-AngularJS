const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const scripts = require('./scripts');
const styles = require('./styles');

// Some pointless comments for our project.

var devMode = false;

gulp.task('css', function() {
    gulp.src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function() {
    return gulp.src('./app/template/**/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task("build",
    gulp.series(gulp.parallel("css", "js", "html"), function (done) {
        done();
    })
);

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist',
        }
    });
});


gulp.task("start", gulp.series("build", "browser-sync"), function (done) {
    devMode = true;
    gulp.watch(["./app/css/**/*.css'"], ["css"]);
    gulp.watch(["./app/js/**/*.js"], ["js"]);
    gulp.watch(["./app/template/**/*.html"], ["html"]);
 done();
});