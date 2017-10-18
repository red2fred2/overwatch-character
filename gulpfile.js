/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//import libraries
const 
			gulp        = require('gulp'),
			runSequence = require('run-sequence'),
			del					= require('del')

//constants
const
			SOURCE_FOLDER = './source/',
			BUILD_FOLDER  = './build/',
			GULP_FOLDER   = './gulp/',
			TEMP_FOLDER   = './temp/'

//import external code
const
			CompileEJS = require(GULP_FOLDER + 'compileEJS'),
			MinifyHTML = require(GULP_FOLDER + 'minifyHTML')

//initialize global variables

//////////////////////////////////////////////////////////////////////

//simple tasks
gulp.task('compile ejs', CompileEJS(SOURCE_FOLDER, TEMP_FOLDER))
gulp.task('minify html', MinifyHTML(TEMP_FOLDER, TEMP_FOLDER))
gulp.task('clean temp', ()=>del(TEMP_FOLDER + '**'))

//task groups
gulp.task('build html', runSequence('compile ejs', 'minify html'))


gulp.task('default', runSequence('clean temp', 'build html'))
