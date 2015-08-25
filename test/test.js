/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	rescape = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'utils-escape-regex-string', function tests() {

	it( 'should export a function', function test() {
		expect( rescape ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a primitive string', function test() {
		var values = [
			5,
			NaN,
			null,
			true,
			undefined,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				rescape( value );
			};
		}
	});

	it( 'should escape a regular expression string', function test() {
		var expected,
			actual,
			values;

		values = [
			'/beep/',
			'/[A-Z]*/',
			'/\\\//ig',
			'/[A-Z]{0,}/',
			'/^boop$/',
			'/(?:.*)/',
			'/(?:beep|boop)/'
		];

		expected = [
			'/beep/',
			'/\\[A-Z\\]\\*/',
			'/\\\\\//ig',
			'/\\[A-Z\\]\\{0,\\}/',
			'/\\^boop\\$/',
			'/\\(\\?:\\.\\*\\)/',
			'/\\(\\?:beep\\|boop\\)/'
		];

		for ( var i = 0; i < values.length; i++ ) {
			actual = rescape( values[ i ] );
			assert.strictEqual( actual, expected[ i ], values[ i ] );
		}
	});

});
