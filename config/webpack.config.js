const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
  ? ['./src/index.js']
  : [
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
  ];

const plugins = PRODUCTION
  ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style-[contenthash:10].css'),
    new HTMLWebpackPlugin({
      template: 'config/index-template.html',
    }),
  ]
  : [new webpack.HotModuleReplacementPlugin()];

const cssIdentifier = PRODUCTION ? '[hash:base64:10]---[local]' : '[path][name]---[local]';
const cssLoader = PRODUCTION
  ? ExtractTextPlugin.extract({
    use: 'css-loader?minimize=true&localIdentName=' + cssIdentifier + '!sass-loader?includePaths[]=' + path.resolve(__dirname, './src')
  })
  : ['style-loader', 'css-loader?localIdentName=' + cssIdentifier, 'sass-loader']

module.exports = {
  devtool: 'source-map',
  entry,
  plugins,
  performance: {
    hints: PRODUCTION ? 'warning' : false,
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/',
    }, {
      test: /\.(jpg|png|gif)$/,
      loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
      exclude: '/node_modules/',
    }, {
      test: /\.scss$/,
      loaders: cssLoader,
      exclude: '/node_modules/',
    }],
  },
};
