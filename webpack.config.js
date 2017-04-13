var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
// var webpack = require('webpack');



module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port:8080
    },
    plugins: [new HtmlWebpackPlugin({
         template: './src/index.html'
    })]
}