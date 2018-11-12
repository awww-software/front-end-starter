const webpackSteam = require('webpack-stream');
const webpack = require('webpack');

module.exports = function () {
  const { files, production } = this.context;
  const gulp = this.gulp;

  const webpackConfig = {
    output: { filename: 'bundle.js' },
    devtool: production ? '' : 'source-map',
    mode: production ? 'production' : 'development',
    stats: 'errors-only',
    module: {
      rules: [{
        test: /\.js$/, exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  };

  return gulp.src(files.scripts.source)
             .pipe(webpackSteam(webpackConfig))
             .pipe(gulp.dest(files.scripts.destination));
};
