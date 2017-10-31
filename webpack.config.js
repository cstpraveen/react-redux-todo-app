const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      // Load images.
      {
        test: /\.(svg|gif|jpe?g|png)$/,
        loader: 'url-loader?limit=25000',
        query: {
          limit: 10000,
          name: 'static/media/images/[name].[hash:8].[ext]'
        }
      },
      // jSon Loader
      {
        test: /\.json$/,
        loader: 'json-loader'
      }, 
      // scss Loader
      {
        test: /\.scss$/,
        loader: 'style!css!sass!resolve-url!sass?sourceMap&sourceComments'
      },
      // css Loader
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1'
      }
    ]
 },
 plugins: [HtmlWebpackPluginConfig]
}
