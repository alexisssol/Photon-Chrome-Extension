const path = require('path');

module.exports = {
  entry: {
    background: './src/background.ts',
    content: './src/content.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
};
