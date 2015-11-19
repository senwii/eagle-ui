/**
 * Created by mac on 15/9/6.
 */
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack/webpack.config');
var extend = require('extend');

module.exports =extend({},webpackConfig,{
    output:{
        libraryTarget: 'umd',
        path:path.join(process.cwd(),'dist'),
        filename:'eagle-ui.min.js'
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ]
});