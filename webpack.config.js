const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: `${__dirname}/src/index.jsx`,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [`${__dirname}/src`, 'node_modules'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fire Emblem 7 Info',
      template: `${__dirname}/src/index.ejs`,
      filename: `${__dirname}/dist/index.html`,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
