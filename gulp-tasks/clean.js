const clean = require('gulp-clean');

module.exports = function () {
  const { dirs } = this.context;
  const gulp = this.gulp;

  return gulp.src(dirs.build, { read: false, allowEmpty: true })
             .pipe(clean());
};
