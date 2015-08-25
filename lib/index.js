'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// VARIABLES //

var RE = /[.*+?^${}()|[\]\\]/g;


// ESCAPE //

/**
* FUNCTION: rescape( str )
*	Escapes a regular expression string.
*
* @param {String} str - regular expression string
* @returns {String} escaped string
*/
function rescape( str ) {
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid input argument. Must provide a regular expression string. Value: `' + str + '`.' );
	}
	return str.replace( RE, '\\$&' );
} // end FUNCTION rescape()


// EXPORTS //

module.exports = rescape;
