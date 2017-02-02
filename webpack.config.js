var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cssnext = require("postcss-cssnext");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');


var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const isProduction = process.env.NODE_ENV === 'production' || !!process.env.CI;
process.env.NODE_ENV = isProduction ? 'production' : 'development';

const publicPath = isProduction ? 'https://zurihac.info/' : '/';

const productionPlugins = [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
    new webpack.optimize.UglifyJsPlugin({
      compress: { screw_ie8: true, warnings: false },
      mangle: { screw_ie8: true },
      output: { screw_ie8: true, comments: false },
    }),
    new ExtractTextPlugin('static/[name].[hash:8].css'),
    new StaticSiteGeneratorPlugin('site', ['/'])
]

const developmentPlugins = [
    new HtmlWebpackPlugin({ inject: true, template: resolveApp('src/entry/dev.html'), }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
    new webpack.HotModuleReplacementPlugin(),
]

const plugins = isProduction
    ? productionPlugins
    : developmentPlugins


module.exports = {
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  entry: {
    site: isProduction
        ? resolveApp('src/entry/static.js')
        : [require.resolve('react-dev-utils/webpackHotDevClient'), resolveApp('src/entry/dev.js')],

    main: [resolveApp('static/lazysizes.min.js'), resolveApp('static/main.js')],
  },
  output: {
    path: resolveApp('build'),
    filename: 'static/[name].[hash:8].js',
    publicPath: publicPath,
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', ''],
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: resolveApp('src'),
      }
    ],
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: resolveApp('src'),
        loader: 'babel',
        query: { cacheDirectory: true }
      },
      {
        test: /\.css$/,
        loader: isProduction
            ? ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1!postcss')
            : 'style!css?modules&importLoaders=1!postcss'
      },
    ]
  },
  postcss: [cssnext()],
  plugins: plugins,
};
