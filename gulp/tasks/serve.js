var gulp = require('gulp')
var static = require('node-static');
var o = require('open');
var ripple = require('ripple-emulator');

var options = {
       keepAlive: false,
       open: true,
       port: 4400
      //  path: 'platforms/ios/www/'
};

gulp.task('serve', ['watch', 'setWatch'], function(){

  ripple.emulate.start(options);

  if (options.open) {
      o('http://localhost:' + options.port + '?enableripple=cordova-3.0.0');
  }

});
