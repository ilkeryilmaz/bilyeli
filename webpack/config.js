const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE_ENV === 'production';
const IS_DEVELOPMENT = NODE_ENV === 'development';

const paths = {
  source: path.join(__dirname, '../src'),
  assets: path.join(__dirname, '../src/assets/'),
  img: path.join(__dirname, '../src/assets/img'),
  build: path.join(__dirname, '../build'),
};

const entry = [path.join(paths.source, 'index.js')];

const resolve = {
  modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  alias: {
    Assets: path.resolve(__dirname, '../src/assets'),
  },
};

/**
 * Dev Env.
 */
const devServer = {
  contentBase: IS_PRODUCTION ? paths.build : paths.source,
  historyApiFallback: true,
  port: 8080,
  compress: IS_PRODUCTION,
  inline: !IS_PRODUCTION,
  hot: !IS_PRODUCTION,
  disableHostCheck: true,
};

/**
 * Plugins
 */
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
    },
  }),

  new webpack.NamedModulesPlugin(),

  new HtmlWebpackPlugin({
    template: path.join(paths.source, 'index.html'),
    path: paths.build,
    filename: 'index.html',
  }),
];

/**
 * Rules
 */
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  {
    test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    include: paths.assets,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'client/assets/[name]-[hash].[ext]',
        },
      },
    ],
  },
];

if (IS_PRODUCTION) {
  // Production plugins
  plugins.push(new ExtractTextPlugin('app-[hash].css'));

  // Production rules
  rules.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: { camelCase: true },
        },
        {
          loader: 'sass-loader',
          options: {
            data: '@import "assets/styles/_global.scss";',
            includePaths: [__dirname, 'src'],
          },
        },
      ],
    }),
  });
} else {
  // Development plugins
  plugins.push(new webpack.HotModuleReplacementPlugin(), new DashboardPlugin());

  // Development rules
  rules.push({
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: { camelCase: true },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          data: '@import "assets/styles/_global.scss";',
          includePaths: [__dirname, 'src'],
        },
      },
    ],
  });
}

/**
 * Stats
 */
const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m',
  },
};

module.exports = {
  NODE_ENV,
  IS_PRODUCTION,
  IS_DEVELOPMENT,
  paths,
  stats,
  plugins,
  rules,
  resolve,
  devServer,
  entry,
};
