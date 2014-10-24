/**
  Run all build tasks.
*/
var gulp = require('gulp');
var cordova = require('cordova')

gulp.task("cordova_prepare",['index','videos','stylus','browserify'], function(){
    cordova.prepare({platforms:["ios"]})
})

gulp.task('build', [
  'browserify',
  'stylus',
  'index',
  'videos',
  'cordova_prepare'
]);
