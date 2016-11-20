var gulp = require('gulp'),
    browserify = require('browserify'),
    concat = require('gulp-concat');

gulp.task('browserify', function () {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify', 'concat'], function () {
  return gulp.watch('src/**/*.*', ['browserify', 'concat']);
});
