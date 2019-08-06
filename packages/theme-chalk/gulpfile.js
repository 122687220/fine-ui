'use strict'
const { watch, series, src, dest, parallel, task } = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const cssnano = require('cssnano')
const presetenv = require('postcss-preset-env')
const tobem = require('postcss-bem-fix')
const clean = require('gulp-clean')

let bemConfig = {
  shortcuts: {
    component: 'b',
    modifier: 'm',
    descendent: 'e'
  },
  separators: {
    descendent: '__',
    modifier: '--'
  }
}

function cleanLib() {
  return src('./lib/*.css', {
    read: false
  }).pipe(clean())
}

function compileCss() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(
      postcss([
        tobem(bemConfig),
        presetenv(),
        cssnano({
          'cssnano-preset-advanced': {
            zindex: false,
            autoprefixer: false
          }
        })
      ])
    )
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

function watchCss() {
  // return watch('./src/*.scss', parallel(compileCss, compileCssToPx))
  return watch('./src/*.scss', compileCss)
}

task('build', parallel(cleanLib, compileCss))

task(
  'default',
  series(
    compileCss,
    // compileCssToPx,
    parallel(watchCss)
  )
)
