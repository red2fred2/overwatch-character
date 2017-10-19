/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//import libraries
const 
			gulp   = require('gulp'),
			rename = require('gulp-rename'),
			sass   = require('gulp-sass')

//constants
const
			SCSS_FOLDER     = 'scss/',
			SELECTOR_STRING = 'main.scss'

//////////////////////////////////////////////////////////////////////

module.exports = function(inputFolder, outputFolder) {
  //gulp.src(inputFolder + SELECTOR_STRING)
  gulp.src(inputFolder + SCSS_FOLDER + SELECTOR_STRING)
	.pipe(
    sass()
  )
  .pipe(
    rename(function(path) {
      path.extname = '.css'
    })
  )
  .pipe(
    gulp.dest(outputFolder)
  )
}