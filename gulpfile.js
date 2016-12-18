var $r = require,
    $gulp = $r('gulp'),
    $jade = $r('gulp-jade'),
    $smap = $r('gulp-sourcemaps'),
    $cmin = $r('gulp-minify-css'),
    $imin = $r('gulp-imagemin'),
    $spriter = $r('gulp.spritesmith');
    $repl = $r('gulp-replace'),
    $renm = $r('gulp-rename'),
    $jshint = $r('gulp-jshint');


/*----------------------------*/
$gulp.task('jade', function () {
    return $gulp.watch(['share/jade/*.jade', 'share/jade/*/*.jade'], ['html']);
});

/*$gulp.task('watch', ['scss', 'jade']);*/

$gulp.task('default', ['html']);