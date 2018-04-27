// pull in path, default node.js library which is globally available
var path = require('path')
// distribution directory copy transpilers and bundle files. Used to serve app. Copy everything into the DIST folder
var DIST_DIR = path.resolve(__dirname, 'dist')
// acutally where you find the untranspiled source code
var SRC_DIR = path.resolve(__dirname, 'src')

var config = {
  // file that you should start your transpiling and bundling journey in
  entry: SRC_DIR + '/app/index.js', // index.js will be root file, file that starts the application
  // tells webpack where to output everything
  mode: 'development',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/' // if were to use a real server we would depoly the DIST folder, this would be the public server folder to look
  },
  // only required if you were writing in es6 and needed your code to be bundeled and compiled
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
}

module.exports = config
