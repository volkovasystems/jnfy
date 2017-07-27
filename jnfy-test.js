
const assert = require( "assert" );
const jnfy = require( "./jnfy.js" );

assert.equal( jnfy( { "name": "simple" } ), '{"name":"simple"}', "should be equal to '{'name':'simple'}'" );

assert.equal( typeof jnfy( global ), "string", "should be equal to 'string'" );

console.log( "ok" );
