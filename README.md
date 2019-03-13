[![CircleCI branch](https://img.shields.io/circleci/project/github/dsyncerek/front-end-starter/master.svg)](https://circleci.com/gh/dsyncerek/front-end-starter)
[![dependencies Status](https://img.shields.io/david/dsyncerek/front-end-starter.svg)](https://david-dm.org/dsyncerek/front-end-starter)
[![devDependencies Status](https://img.shields.io/david/dev/dsyncerek/front-end-starter.svg)](https://david-dm.org/dsyncerek/front-end-starter?type=dev)

# Front-End Starter

## Installation

```
git clone https://github.com/dsyncerek/front-end-starter.git
cd front-end-starter
npm install
```

## Configuration

All paths can be changed in `gulpfile.js` file - variables `DIRS` and `FILES`.

## Development

`npm run start` start the development server

`npm run build` build the project

`npm run lint` lint the project with `eslint` and `stylelint`

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dsyncerek/front-end-starter)

## Gulp Tasks

`static:html` compile and minify `twig` templates

`static:images` compress images

`static:scripts` bundle scripts, generate `sourcemaps` and minify output with `webpack`

`static:styles` compile styles, run `auto-prefixer`, generate `sourcemaps` and minify output with `PostCSS`

`static:svg` compress and combine `SVG` files into one `<symbol>` element

`build` run all `static:*` tasks

`clean` clean the `DIRS.build` folder

`copy` copy files from `FILES.copy.source` to `FILES.copy.destination`

`serve` run `browser-sync` server in `DIRS.build`

`start` run `build`, then `watch` and `serve`

`watch` watch all files and run proper tasks

## [License](LICENSE)
