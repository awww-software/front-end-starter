[![dependencies Status](https://david-dm.org/dsyncerek/front-end-starter/status.svg)](https://david-dm.org/dsyncerek/front-end-starter)
[![devDependencies Status](https://david-dm.org/dsyncerek/front-end-starter/dev-status.svg)](https://david-dm.org/dsyncerek/front-end-starter?type=dev)

# Front-End Starter

## Installation

`npm install`

## Configuration

All paths can be changed in `gulpfile.js` file - variables `DIRS` and `FILES`.

## Development

`npm run start` start the development server

`npm run build` build the project

`npm run start-prod` start the production server

`npm run build-prod` build the project with production settings

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
