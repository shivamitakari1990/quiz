var path = require('path');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.join(__dirname, 'src/client/index.js')
  ],

  output: {
    path: __dirname + '/app/',
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src'),
    ],
    modulesDirectories: [
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',

        query: {
            plugins: [
              'transform-decorators-legacy'
            ],
            presets: ["es2015", "stage-0", "react"]
        }
      }
    ]
  }
}