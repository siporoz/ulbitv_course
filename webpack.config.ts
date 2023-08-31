const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        // Файлы которые нужно смотреть ts, tsx,
        test: /\.tsx?$/,
        // Модуль который их будет обрабатывать
        use: 'ts-loader',
        // Исключаем нодемодулес
        exclude: /node_modules/,
      },
    ],
  },
  // Убирает сокращенное название
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin(),
  ]
};