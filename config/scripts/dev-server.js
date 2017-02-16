const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.config.js');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  contentBase: './',
  stats: {
    colors: true,
    warnings: false,
    chunks: false,
  },
});
server.listen(8080, 'localhost', () => {});
