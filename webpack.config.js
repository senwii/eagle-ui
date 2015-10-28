/**
 * Created by mac on 15/9/6.
 */
var path = require('path');
var webpack = require('webpack');
var extend = require('extend');
//var externals = require('./externals');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var
var getExternals = function(){
    var list = {};
    extend(list, externals.reduce(function(ret, dep) {
        ret[dep] = dep;//'require("' + dep + '")';
        return ret;
    }, {}));
    console.dir(list);
    return list;
};


module.exports = {
    entry:['./index.js'],
    devtoll:'source-map',
    resolve:{
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'lib'
        ]
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'eagleui.js'/*,
         sourceMapFilename:'[file].map'*/
    },
    externals:{
        'react':'React'
    },//getExternals(),
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
                //loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    }/*,
    plugins: [
        new ExtractTextPlugin("eagleui.css")
    ]*/
};