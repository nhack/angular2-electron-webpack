/**
 * Created by marius on 19/09/16.
 */
/**
 * Created by marius on 15/09/16.
 */
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: helpers.root('dist/'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),

        new CopyWebpackPlugin([
            {from: 'src/electron.js'},
            {from: 'src/package.json'}
        ])
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
