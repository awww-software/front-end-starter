module.exports = function (done) {
  const { files } = this.context;
  const gulp = this.gulp;

  gulp.watch(files.scripts.watch || files.scripts.source, gulp.series('static:scripts'));
  gulp.watch(files.styles.watch || files.styles.source, gulp.series('static:styles'));
  gulp.watch(files.images.watch || files.images.source, gulp.series('static:images'));
  gulp.watch(files.svg.watch || files.svg.source, gulp.series('static:svg'));
  gulp.watch(files.html.watch || files.html.source, gulp.series('static:html'));
  gulp.watch(files.copy.watch || files.copy.source, gulp.series('copy'));

  done();
};
