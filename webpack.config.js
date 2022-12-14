const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client/src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  watchOptions: {
    ignored: ['**/node_modules/', '**/client/dist/index.html'],
  },
  module: {
    rules: [
      {
        test: /\.?(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/dist', 'index.html'),
      inject: false,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
