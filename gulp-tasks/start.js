module.exports = function (done) {
  const gulp = this.gulp;

  return gulp.series('build', gulp.parallel('watch', 'serve'))(done);
};
