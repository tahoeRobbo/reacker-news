const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MomentLocalesPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}
