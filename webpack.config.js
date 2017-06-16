const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
// var webpack = require('webpack');



module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module:{
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
         {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port:5000
    },
    plugins: [new HtmlWebpackPlugin({
         template: './src/index.html'
    }),
     new ExtractTextPlugin('style.css')
    ]
}