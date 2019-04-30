const twig = require('gulp-twig');
const htmlmin = require('gulp-htmlmin');
const util = require('gulp-util');

module.exports = function() {
  const { files, production } = this.context;
  const gulp = this.gulp;

  return gulp
    .src(files.html.source)
    .pipe(twig())
    .pipe(production ? htmlmin({ collapseWhitespace: true }) : util.noop())
    .pipe(gulp.dest(files.html.destination));
};
