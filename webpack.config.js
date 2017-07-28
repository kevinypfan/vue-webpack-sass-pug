var path = require('path');


module.exports = {
  entry: './src/main.js',
  output: {
        publicPath: '/dist/',
        filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
  },
    
  module: {
    rules: [
        {
          test: /\.vue$/,
            loader: 'vue-loader'  
        },
        {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
        {
             test: /\.sass$/,
            loaders: ["css","style","sass"]
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader'
        }
       
    ]
  }
}