/* eslint-disable */

const path = require('path')
const nodeExternals = require('webpack-node-externals')

var config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/handlebars.js',
    },
    extensions: [ '.tsx', '.ts', '.js' ],
  },
}

var client = Object.assign({}, config, {
  name: 'client',
  target: 'web',
  entry: {
    collabApp: path.resolve(__dirname, 'src/components/app/index.tsx'),
    newCollab: path.resolve(__dirname, 'src/components/newCollab/index.tsx'),
  }, 
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/public'),
  },
});

var server = Object.assign({}, config, {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
  },
  node: {
    __dirname: false,
  },
});

module.exports = [client, server]
