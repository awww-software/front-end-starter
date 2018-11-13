const util = require('gulp-util');

const DIRS = {
  source: `./source`,
  public: `./public`,
  build: `./build`,
};

const FILES = {
  html: {
    source: `${DIRS.source}/views/*.twig`,
    watch: `${DIRS.source}/views/**/*`,
    destination: `${DIRS.build}/`
  },
  images: {
    source: `${DIRS.public}/images/**/*`,
    destination: `${DIRS.build}/assets/images/`,
  },
  svg: {
    source: `${DIRS.public}/svg/**/*`,
    destination: `${DIRS.build}/assets/images/`,
  },
  styles: {
    source: `${DIRS.source}/styles/styles.scss`,
    watch: `${DIRS.source}/styles/**/*`,
    destination: `${DIRS.build}/assets/styles/`,
  },
  scripts: {
    source: `${DIRS.source}/scripts/index.js`,
    watch: `${DIRS.source}/scripts/**/*`,
    destination: `${DIRS.build}/assets/scripts/`,
  },
  copy: {
    source: [`${DIRS.public}/**/*`, `!${DIRS.public}/images/**/*`, `!${DIRS.public}/svg/**/*`],
    destination: `${DIRS.build}/assets/`,
  }
};

require('gulp-load-all-tasks')({
  dirs: DIRS,
  files: FILES,
  production: !!util.env.production
});
