const stylelint = require('gulp-stylelint');

module.exports = function() {
  const { files } = this.context;
  const gulp = this.gulp;

  return gulp.src(files.styles.watch).pipe(
    stylelint({
      failAfterError: false,
      reporters: [{ formatter: 'string', console: true }],
    })
  );
};
