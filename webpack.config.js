const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/app.ts'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};
