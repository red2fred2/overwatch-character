/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//import libraries
const 
			gulp   = require('gulp'),
			rename = require('gulp-rename'),
			ejs    = require('gulp-ejs')

//constants
const
			EJS_FOLDER      = 'ejs/',
			SELECTOR_STRING = 'pages/*.ejs'

//import external code

//initialize global variables

//////////////////////////////////////////////////////////////////////

module.exports = function(inputFolder, outputFolder) {
  gulp.src(inputFolder + EJS_FOLDER + SELECTOR_STRING)
  .pipe(
    ejs()
  )
  .pipe(
    rename(function(path) {
      path.extname = '.html'
    })
  )
  .pipe(
    gulp.dest(outputFolder)
  )
}