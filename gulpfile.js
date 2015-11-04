var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var extend = require('extend');
var glob = require('glob');
var p = require('path');
var webpackConfig = require('./webpack.config');

var error = function(e){
  console.error(e);
  if(e.stack){
    console.error(e.stack);
  }
  process.exit(1);
}

gulp.task('demo-webpack', function(done) {

  webpack(extend(webpackConfig,{
    output:{
      path:p.join(__dirname,'example/js'),
      filename:'eagle-ui.js'
    }
  })).run(done);
});

gulp.task('require-webpack', function(done) {
  webpack(extend(webpackConfig,{
    externals:{
      'react':"require('react')"
    }
  })).run(done);
});

gulp.task('watch', function () {
  gulp.watch(['./lib/**/*.*'], ['webpack']);
});



var getEntry =function() {
  var basedir = p.join(process.cwd(), 'example');
  var files = glob.sync(p.join(basedir, '*.js'));

  var webpackConfigEntry = {};//webpackConfig.entry || (webpackConfig.entry = {});

  files.forEach(function(file) {
    var relativePath = p.relative(basedir, file);

    webpackConfigEntry[relativePath] = file;
  });
  return webpackConfigEntry;
};

gulp.task('demo-js', function(done) {
  webpack(extend(webpackConfig,{
    entry:getEntry(),
    output:{
      path:p.join(__dirname,'example/js'),
      filename: "[name]"
    }
  } )).run(done);
});

gulp.task('default', ['require-webpack'/*, 'html', 'asset'*/]);
gulp.task('demo', [/*'demo-webpack',*/'demo-js']);