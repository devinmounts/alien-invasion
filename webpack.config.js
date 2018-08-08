const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Alien Invasion',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "eslint-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         {
        loader: 'file-loader',
        options:{
          name:'[name].[ext]'
        }
      }
     ]
    },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      }
    ]
  }
};
