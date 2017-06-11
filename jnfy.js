"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "jnfy",
			"path": "jnfy/jnfy.js",
			"file": "jnfy.js",
			"module": "jnfy",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/jnfy.git",
			"test": "jnfy-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Stringify JSON structure properly.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"json": "circular-json",
			"protype": "protype"
		}
	@end-include

	@todo:
		This will be the future circular json module of the vs architecture.
	@end-todo
*/

const falzy = require( "falzy" );
const json = require( "circular-json" );
const protype = require( "protype" );

const jnfy = function jnfy( entity, replacer, space ){
	/*;
		@meta-configuration:
			{
				"entity:required": "object"
			}
		@end-meta-configuration
	*/

	if( falzy( entity ) || !protype( entity, OBJECT ) ){
		throw new Error( "invalid entity" );
	}

	return json.stringify( entity, replacer, space );
};

module.exports = jnfy;
