module.exports = function (done) {
  const gulp = this.gulp;

  return gulp.parallel('lint:scripts', 'lint:styles')(done);
};
