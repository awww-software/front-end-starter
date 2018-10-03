const ejs = require("gulp-ejs");

module.exports = function () {
  const {files} = this.context;
  const gulp = this.gulp;

  return gulp.src(files.html.source)
             .pipe(ejs())
             .pipe(gulp.dest(files.html.destination));
};
