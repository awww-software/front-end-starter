const util = require('gulp-util');

const dirs = {
  source: `./source`,
  public: `./public`,
  build: `./build`,
};

const files = {
  html: {
    source: `${dirs.source}/views/*.html`,
    watch: `${dirs.source}/views/**/*`,
    destination: `${dirs.build}/`
  },
  images: {
    source: `${dirs.public}/images/**/*`,
    destination: `${dirs.build}/assets/images/`,
  },
  svg: {
    source: `${dirs.public}/svg/**/*`,
    destination: `${dirs.build}/assets/images/`,
  },
  styles: {
    source: `${dirs.source}/styles/styles.scss`,
    watch: `${dirs.source}/styles/**/*`,
    destination: `${dirs.build}/assets/styles/`,
  },
  scripts: {
    source: `${dirs.source}/scripts/index.js`,
    watch: `${dirs.source}/scripts/**/*`,
    destination: `${dirs.build}/assets/scripts/`,
  },
  copy: {
    source: [`${dirs.public}/**/*`, `!${dirs.public}/images/**/*`, `!${dirs.public}/svg/**/*`],
    destination: `${dirs.build}/assets/`,
  }
};

require('gulp-load-all-tasks')({
  dirs,
  files,
  production: !!util.env.production
});
