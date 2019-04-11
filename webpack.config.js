const path = require('path');

const {
  IS_PRODUCTION,
  paths,
  stats,
  plugins,
  rules,
  entry,
  resolve,
  devServer,
} = require('./webpack/config');


module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  devtool: IS_PRODUCTION ? false : 'source-map',
  entry,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'bundle-[hash].js',
  },
  module: {
    rules,
  },
  plugins,
  stats,
  devServer,
  resolve,
  optimization: {
    minimize: IS_PRODUCTION,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, 'node_modules'),
          name: 'vendor',
          filename: 'vendor-[hash].js',
          enforce: true,
        },
      },
    },
  },
};
