const browserSync = require('browser-sync').create();

module.exports = function (done) {
  const { dirs } = this.context;

  const browsersyncConfig = {
    notify: false,
    server: { baseDir: dirs.build },
    files: [`${dirs.build}/**/*`]
  };

  browserSync.init(browsersyncConfig, done);
};
