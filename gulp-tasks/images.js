const gulp = require('gulp');
const image = require('gulp-image');

module.exports = function () {
  const {files} = this.context;
  const gulp = this.gulp;

  return gulp.src(files.images.source)
             .pipe(image({quiet: true}))
             .pipe(gulp.dest(files.images.destination));
};
