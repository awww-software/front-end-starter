const browserSync = require('browser-sync').create();

module.exports = function (done) {
  const {dirs} = this.context;

  const browsersyncConfig = {
    logLevel: 'silent',
    notify: false,
    server: {baseDir: dirs.build},
    files: [`${dirs.build}/**/*`]
  };

  browserSync.init(browsersyncConfig, done);
};
