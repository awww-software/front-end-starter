module.exports = function (done) {
  const gulp = this.gulp;

  return gulp.series('clean', gulp.parallel('html', 'scripts', 'styles', 'images', 'svg', 'copy'))(done);
};
