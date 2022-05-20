// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import * as path from 'path';
import * as webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  target: 'node',
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },

  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

export default config;
