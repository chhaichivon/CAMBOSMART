const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PUBLIC_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");
module.exports = {
    PUBLIC_DIR: PUBLIC_DIR,
    SRC_DIR: SRC_DIR,
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        SRC_DIR + '/index.js'
    ],
    output: {
        path: PUBLIC_DIR + '/js',
        publicPath: '/js',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    devServer: {
        contentBase: PUBLIC_DIR,
        disableHostCheck:true,
        host:'0.0.0.0',
        port: 8080
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
            root: PUBLIC_DIR,
            verbose: true,
            dry: false
        })
    ]
};