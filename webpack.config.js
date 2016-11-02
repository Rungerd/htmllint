var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: __dirname,
    filename: 'htmllint-bundle-webpack.js',
    libraryTarget: 'var',
    library: 'htmllint'
    // umdNamedDefine: true
  },
  //target: 'webworker',

  resolve: {
    extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.json', 'index.json']
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
    ],
    loaders: [
        //{ test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
        { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'},
        //{ test: /\.css$/, exclude: /static/, loader: 'style!css'}
    ]
  }

  //devtool: '#eval'
}
