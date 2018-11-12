const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

module.exports = function () {
  const { files } = this.context;
  const gulp = this.gulp;

  return gulp.src(files.images.source)
             .pipe(newer(files.images.destination))
             .pipe(imagemin())
             .pipe(gulp.dest(files.images.destination));
};
