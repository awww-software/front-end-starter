module.exports = function () {
  const {files} = this.context;
  const gulp = this.gulp;

  return gulp.src(files.copy.source, {nodir: true})
             .pipe(gulp.dest(files.copy.destination));
};
