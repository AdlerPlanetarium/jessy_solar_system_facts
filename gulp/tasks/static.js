/*
  Move HTML out of client and into build.
*/

var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');

gulp.task('index',function(){
  var dest = './www/';
  return gulp.src('index.html',{ base: './' })
    .on('error', handleErrors)
    .pipe(gulp.dest(dest));
})

gulp.task('videos', function() {
  var videoDest = "./www";
  return gulp.src('./videos/*.m4v',{ base: './' })
    .on('error', handleErrors)
    .pipe(gulp.dest(videoDest));
});

gulp.task('static',['videos','index'])
