const eslint = require('gulp-eslint');

module.exports = function() {
  const { files } = this.context;
  const gulp = this.gulp;

  return gulp
    .src(files.scripts.watch)
    .pipe(eslint())
    .pipe(eslint.format());
};
