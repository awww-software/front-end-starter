const twig = require('gulp-twig');

module.exports = function () {
  const { files } = this.context;
  const gulp = this.gulp;

  return gulp.src(files.html.source)
             .pipe(twig())
             .pipe(gulp.dest(files.html.destination));
};
