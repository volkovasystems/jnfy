"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "jnfy",
			"path": "jnfy/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/jnfy.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"jnfy": "jnfy"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const jnfy = require( "./jnfy.js" );
//: @end-server

//: @client:
const jnfy = require( "./jnfy.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "jnfy", ( ) => {

	describe( "`jnfy( { 'name': 'simple' } )`", ( ) => {

		it( "should return string type", ( ) => {

			assert.equal( typeof jnfy( { "name": "simple" } ) == "string", true );

		} );

		it( "should be equal to '{'name':'simple'}'", ( ) => {

			assert.equal( jnfy( { "name": "simple" } ), '{"name":"simple"}' );

		} );

	} );

} );

//: @end-server


//: @client:

describe( "jnfy", ( ) => {

	describe( "`jnfy( { 'name': 'simple' } )`", ( ) => {

		it( "should return string type", ( ) => {

			assert.equal( typeof jnfy( { "name": "simple" } ) == "string", true );

		} );

		it( "should be equal to '{'name':'simple'}'", ( ) => {

			assert.equal( jnfy( { "name": "simple" } ), '{"name":"simple"}' );

		} );

	} );

} );

//: @end-client


//: @bridge:

describe( "jnfy", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`jnfy( { 'name': 'simple' } )`", ( ) => {

		it( "should return string type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof jnfy( { "name": "simple" } ) == "string";
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );

		it( "should be equal to '{'name':'simple'}'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return jnfy( { "name": "simple" } );
				}

			).value;

			assert.equal( result, '{"name":"simple"}' );

		} );

	} );

} );

//: @end-bridge
