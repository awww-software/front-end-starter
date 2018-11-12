const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');

module.exports = function () {
  const { files } = this.context;
  const gulp = this.gulp;

  return gulp.src(files.svg.source)
             .pipe(imagemin())
             .pipe(svgstore())
             .pipe(gulp.dest(files.svg.destination));
};
