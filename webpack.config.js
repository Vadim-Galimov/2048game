const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: path.resolve(__dirname, 'src', 'index.js'),
 output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.js'

 },
 plugins: [new HtmlWebpackPlugin({
   template: path.resolve(__dirname, 'src', 'index.html'),
   scriptLoading: "blocking"
 })],
 module: {
   rules: [
      {
         test: /\.(?:js|mjs|cjs)$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: [
               ['@babel/preset-env', { targets: "defaults" }]
             ]
           }
         }
      },

 ],
},
};