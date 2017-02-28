/**
 * Created by mac on 15/9/6.
 */
var path = require('path');
var webpack = require('webpack');
var extend = require('extend');
var projectName = require("../package.json").name;
module.exports ={
    entry:[path.join(process.cwd(),'src/index.js')],
    devtoll:'source-map',
    resolve:{
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'lib'
        ]
    },
    output:{
        library:'Eagleui',
        libraryTarget: 'umd',
        path:path.join(process.cwd(),'dist'),
        filename:projectName+'.js'
    },
    externals:[{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react/lib/ReactDOM': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }],
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            }
        ]
    },
    plugins:[
        //new webpack.optimize.UglifyJsPlugin()
    ]
};