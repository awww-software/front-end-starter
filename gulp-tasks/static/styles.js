const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const sass = require('@csstools/postcss-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const util = require('gulp-util');

module.exports = function () {
  const { files, production } = this.context;
  const gulp = this.gulp;

  return gulp.src(files.styles.source)
             .pipe(!production ? sourcemaps.init() : util.noop())
             .pipe(postcss([sass({ includePaths: ['node_modules/'] }), autoprefixer(), cssnano()]))
             .pipe(rename('bundle.css'))
             .pipe(!production ? sourcemaps.write('.') : util.noop())
             .pipe(gulp.dest(files.styles.destination));
};
