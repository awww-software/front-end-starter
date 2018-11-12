module.exports = function (done) {
  const gulp = this.gulp;

  return gulp.series('clean', gulp.parallel('static:html', 'static:scripts', 'static:styles', 'static:images', 'static:svg', 'copy'))(done);
};
