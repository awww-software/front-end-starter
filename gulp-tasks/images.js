const image = require('gulp-image');
const util = require('gulp-util');

module.exports = function () {
  const {files, production} = this.context;
  const gulp = this.gulp;

  return gulp.src(files.images.source)
             .pipe(production ? image({quiet: true}) : util.noop())
             .pipe(gulp.dest(files.images.destination));
};
