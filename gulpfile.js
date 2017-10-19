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
			CompileEJS  = require(GULP_FOLDER + 'compileEJS'),
			MinifyHTML  = require(GULP_FOLDER + 'minifyHTML'),
			CompileSCSS = require(GULP_FOLDER + 'compileSCSS'),
			MinifyCSS   = require(GULP_FOLDER + 'minifyCSS'),
			CompileJS   = require(GULP_FOLDER + 'compileJS'),
			MinifyJS    = require(GULP_FOLDER + 'minifyJS'),
			Inline      = require(GULP_FOLDER + 'inline.js')

//////////////////////////////////////////////////////////////////////

//simple tasks
gulp.task('compile ejs', CompileEJS(SOURCE_FOLDER, TEMP_FOLDER))
gulp.task('minify html', MinifyHTML(TEMP_FOLDER, TEMP_FOLDER))

gulp.task('clean temp', ()=>del(TEMP_FOLDER + '**'))
gulp.task('clean build', ()=>del(BUILD_FOLDER + '**'))

gulp.task('compile scss', CompileSCSS(SOURCE_FOLDER, TEMP_FOLDER))
gulp.task('minify css', MinifyCSS(TEMP_FOLDER, TEMP_FOLDER))

gulp.task('compile js', CompileJS(SOURCE_FOLDER, TEMP_FOLDER))
gulp.task('minify js', MinifyJS(TEMP_FOLDER, TEMP_FOLDER))

gulp.task('inline', Inline(TEMP_FOLDER, BUILD_FOLDER))

//task groups
gulp.task('build css', runSequence('compile scss', 'minify css'))
gulp.task('build js', runSequence('compile js', 'minify js'))
gulp.task('build html', runSequence('compile ejs', 'build css', 'build js', 'inline'))

gulp.task('default', runSequence('clean temp', 'clean build', 'build html'))
