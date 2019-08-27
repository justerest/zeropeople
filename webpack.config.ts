import { resolve } from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const config: Configuration = {
  mode: 'production',
  entry: ['./src/index.css', './src/index.tsx'],
  output: { path: resolve(__dirname, 'dist'), filename: 'main.js' },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, use: [{ loader: 'ts-loader' }] },
      { test: /\.(html|svg)$/, use: [{ loader: 'html-loader', options: { interpolate: true } }] },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
      minify: { removeComments: true, collapseWhitespace: true },
    }),
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin(),
  ],
  externals: { react: 'React', 'react-dom': 'ReactDOM' },
};

export default config;
