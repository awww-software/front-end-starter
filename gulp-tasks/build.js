module.exports = function(done) {
  const gulp = this.gulp;

  const staticTasks = ['static:html', 'static:scripts', 'static:styles', 'static:images', 'static:svg'];

  return gulp.series('clean', gulp.parallel(...staticTasks, 'copy'))(done);
};
