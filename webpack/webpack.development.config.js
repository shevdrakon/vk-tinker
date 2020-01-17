const path = require('path');
const webpack = require('webpack');

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
// const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');

const resolveRelativePath = (relativePath) => path.resolve(__dirname, relativePath);
const getClientEnvironment = require('./getClientEnvironment');

const babelOptions = require('../src/client/babel.config.js');

const publicUrl = '';
const config = require('../src/server/configuration/development.configuration');
const env = getClientEnvironment(config, publicUrl);

// const path = require('path');
// const HtmlWebPackPlugin = require("html-webpack-plugin");
//
// const entryFolderPath = path.resolve(__dirname, '../src/client');
// const outputFolderPath = path.resolve(__dirname, '../dist/assets');
// const entryPath = path.join(entryFolderPath, 'entry.tsx');
// const htmlTemplatePath = path.join(entryFolderPath, 'index.html');
//
// const htmlPlugin = new HtmlWebPackPlugin({
//   template: htmlTemplatePath,
//   publicPath: '/account',
//   filename: "./index.html"
// });

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    './src/client/index.tsx',
  ],

  output: {
    path: resolveRelativePath('../dist/client'),
    filename: 'assets/[name].js',
    publicPath: publicUrl,
    pathinfo: true,
  },

  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: resolveRelativePath('../src/client/static/index.html'),
      },
    ),

    // Makes some environment variables available in index.html.
    // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In production, it will be an empty string unless you specify "homepage"
    // in `package.json`, in which case it will be the pathname of that URL.
    // In development, this will be an empty string.
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env),

    // This gives some necessary context to module not found errors, such as
    // the requesting resource.
    // new ModuleNotFoundPlugin('.'),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    // This is necessary to emit hot updates (currently CSS only):
    // new webpack.HotModuleReplacementPlugin(),

    // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebook/create-react-app/issues/240
    new CaseSensitivePathsPlugin(),

    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for Webpack to discover it. This plugin
    // makes the discovery automatic so you don't have to restart.
    // See https://github.com/facebook/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin('node_modules'),

    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],

  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
    concatenateModules: true,
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules\\[*lodash*|react\-dom\-factories]/,
          name: 'vendors',
          chunks: 'initial'
        }
      }
    }
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.module.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      // {
      //   test: /\.module\.(scss|css)$/,
      //   use: ['style-loader','css-loader', 'sass-loader'],
      // },
      {
        test: /^((?!\.module).)*\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          // limit: imageInlineSizeLimit,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions,
        }
      },
    ],
  },

  devServer: {
    publicPath: '/',
    port: 8090,
    historyApiFallback: {
      disableDotRule: true,
    },
    disableHostCheck: true,
    hot: true,
    clientLogLevel: 'none',
    contentBase: resolveRelativePath('../src/client/static'),
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {
      children: false,
      assets: false,
      chunks: false,
      chunkModules: true,
      modules: false,
      hash: false,
      version: false,
    }
  }
};
