module.exports = function (done) {
  const {files} = this.context;
  const gulp = this.gulp;

  gulp.watch(files.scripts.watch || files.scripts.source, gulp.series('scripts'));
  gulp.watch(files.styles.watch || files.styles.source, gulp.series('styles'));
  gulp.watch(files.images.watch || files.images.source, gulp.series('images'));
  gulp.watch(files.svg.watch || files.svg.source, gulp.series('svg'));
  gulp.watch(files.html.watch || files.html.source, gulp.series('html'));
  gulp.watch(files.copy.watch || files.copy.source, gulp.series('copy'));

  done();
};
