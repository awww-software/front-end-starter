const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const util = require('gulp-util');

module.exports = function() {
  const { files, production } = this.context;
  const gulp = this.gulp;

  return gulp
    .src(files.images.source)
    .pipe(newer(files.images.destination))
    .pipe(production ? imagemin() : util.noop())
    .pipe(gulp.dest(files.images.destination));
};
