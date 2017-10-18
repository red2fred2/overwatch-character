/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//import libraries
const 
			gulp = require('gulp')

//constants
const
			SOURCE_FOLDER = './source/',
			BUILD_FOLDER  = './build/',
			GULP_FOLDER   = './gulp/',
			TEMP_FOLDER   = './temp'

//import external code
const
			CompileEJS = require(GULP_FOLDER + 'compileEJS')

//initialize global variables

//////////////////////////////////////////////////////////////////////

gulp.task('compileEJS', CompileEJS(SOURCE_FOLDER, TEMP_FOLDER))

gulp.task('default', ['compileEJS'])