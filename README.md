[![CircleCI branch](https://img.shields.io/circleci/project/github/dsyncerek/front-end-starter/master.svg)](https://circleci.com/gh/dsyncerek/front-end-starter)
[![dependencies Status](https://img.shields.io/david/dsyncerek/front-end-starter.svg)](https://david-dm.org/dsyncerek/front-end-starter)
[![devDependencies Status](https://img.shields.io/david/dev/dsyncerek/front-end-starter.svg)](https://david-dm.org/dsyncerek/front-end-starter?type=dev)

# Front-End Starter

> A [gulp](https://gulpjs.com/)-based template to kick-start fast and modern front-end projects.

## Features

- [BrowserSync](https://www.browsersync.io/) with hot reloading
- HTML with [twig.js](https://github.com/twigjs/twig.js), minification
- CSS with [SCSS](https://sass-lang.com/), [auto-prefixer](https://github.com/postcss/autoprefixer), sourcemaps, minification
- JavaScript with [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), sourcemaps, minification
- SVG combination into one symbol element, [read more](https://css-tricks.com/svg-symbol-good-choice-icons/)
- [ESLint](https://eslint.org/), [stylelint](https://stylelint.io/), [Prettier](https://prettier.io/) support
- [CircleCI](https://circleci.com/) and [Netlify](https://www.netlify.com/) support

## Installation

```
git clone https://github.com/dsyncerek/front-end-starter.git
cd front-end-starter
npm install
```

## Configuration

All paths can be changed in `gulpfile.js` file - variables `DIRS` and `FILES`.

## Usage

`npm run start` start the development server

`npm run build` build the project

`npm run lint` lint the project

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dsyncerek/front-end-starter)

## [License](LICENSE)
