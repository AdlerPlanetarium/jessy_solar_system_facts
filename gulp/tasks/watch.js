var gulp   = require('gulp');
/*
  Watch for changes in stylus
  The browserify gulp task already handles js recompiling when setWatch is invoked
*/

gulp.task('watch', ['setWatch'], function() {
    gulp.watch('css/**/*.styl', ['stylus']);
    gulp.watch('index.html', ['index']);
    gulp.watch('videos/*.m4v', ['videos']);
    gulp.watch('www/**.*', ['cordova_prepare'])
});
