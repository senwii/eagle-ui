var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var error = function(e){
  console.error(e);
  if(e.stack){
    console.error(e.stack);
  }
  process.exit(1);
}

gulp.task('webpack', function(done) {
  webpack(webpackConfig).run(done);
});
gulp.task('watch', function () {
  gulp.watch(['./lib/**/*.*'], ['webpack']);
});

gulp.task('default', ['webpack'/*, 'html', 'asset'*/]);