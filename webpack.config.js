var path = require('path')
var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './lib/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'htmllint-bundle-webpack.js',
    libraryTarget: 'var',
    library: 'htmllint'
    // umdNamedDefine: true
  },
  //target: 'webworker',

  resolve: {
    extensions: ['*', '.js', '.jsx', 'index.js', 'index.jsx', '.json', 'index.json']
  },

  // optimization: {
  //   minimizer: [new UglifyJsPlugin()],
  // },

  plugins: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
 ],

  module: {
    rules : [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }

  //devtool: '#eval'
}
