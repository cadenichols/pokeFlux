const path = require('path');

module.exports = {
  entry: './src',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  devtool: 'inline-source-map'
};
