const webpack = require('webpack');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/index.jsx',
  ],
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint',
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: './client/build',
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './client',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BellOnBundlerErrorPlugin(),
  ],
};
