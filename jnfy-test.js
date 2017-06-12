
const assert = require( "assert" );
const jnfy = require( "./jnfy.js" );

assert.equal( jnfy( { "name": "simple" } ), '{"name":"simple"}', "should be deeply equal" );
assert.ok( jnfy( global ) );

console.log( "ok" );
