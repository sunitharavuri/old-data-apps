module.exports = {
    entry: "./src/js/app.js",
    output: {
    //   filename: "./build/app.js",
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader' }
      ]
    }
  }