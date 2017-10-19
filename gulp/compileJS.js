/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//import libraries
const 
			gulp    = require('gulp'),
			execute = require('child_process').exec

//constants
const
			JS_FOLDER       = 'js/',
			SELECTOR_STRING = 'main.js'

//////////////////////////////////////////////////////////////////////

module.exports = function(inputFolder, outputFolder) {
  
  execute('browserify ' + inputFolder + JS_FOLDER + SELECTOR_STRING + ' -o ' + outputFolder + SELECTOR_STRING)
}