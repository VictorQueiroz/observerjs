var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
	gulp.src([
		'src/util.js',
    'src/events.js',
    'src/*.js'
  ])
	.pipe(concat('observer.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});