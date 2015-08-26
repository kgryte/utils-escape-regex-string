'use strict';

var rescape = require( './../lib' );

console.log( rescape( '/beep/' ) );
// returns '/beep/'

console.log( rescape( 'beep' ) );
// returns 'beep'

console.log( rescape( '/[A-Z]*/' ) );
// returns '/\\[A\\-Z\\]\\*/'

console.log( rescape( '[A-Z]*' ) );
// returns '\\[A\\-Z\\]\\*'

console.log( rescape( '/\\\//ig' ) );
// returns '/\\\\\\\//ig'

console.log( rescape( '\\\/' ) );
// returns '\\\\\\\/'

console.log( rescape( '/[A-Z]{0,}/' ) );
// returns '/\\[A\\-Z\\]\\{0,\\}/'

console.log( rescape( '[A-Z]{0,}' ) );
// returns '\\[A\\-Z\\]\\{0,\\}'

console.log( rescape( '/^boop$/' ) );
// returns '/\\^boop\\$/'

console.log( rescape( '^boop$' ) );
// returns '\\^boop\\$'

console.log( rescape( '/(?:.*)/' ) );
// returns '/\\(\\?:\\.\\*\\)/'

console.log( rescape( '(?:.*)' ) );
// returns '\\(\\?:\\.\\*\\)'

console.log( rescape( '/(?:beep|boop)/' ) );
// returns '/\\(\\?:beep\\|boop\\)/'

console.log( rescape( '(?:beep|boop)' ) );
// returns '\\(\\?:beep\\|boop\\)'

