import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: 'production',
  entry: ['./src/index.css', './src/index.tsx'],
  output: { path: path.resolve(__dirname, 'dist'), filename: 'main.js' },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, use: [{ loader: 'ts-loader' }] },
      { test: /\.(html|svg)$/, use: [{ loader: 'html-loader', options: { interpolate: true } }] },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]', outputPath: 'img/' } },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      minify: { removeComments: true, collapseWhitespace: true, removeAttributeQuotes: true },
    }),
  ],
};

export default config;
