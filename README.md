RegExp String
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Escapes a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) string or pattern.


## Installation

``` bash
$ npm install utils-escape-regex-string
```


## Usage

``` javascript
var rescape = require( 'utils-escape-regex-string' );
```

#### rescape( str )

Escapes a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) `string` or pattern.

``` javascript
var str = rescape( '/[A-Z]*/' );
// returns '/\\[A\\-Z\\]\\*/'

str = rescape( '[A-Z]*' );
// returns '\\[A\\-Z\\]\\*'
```

If provided a value which is not a primitive `string`, the function __throws__ a `TypeError`.

``` javascript
try {
	// throws...
	var str = rescape( null );
} catch ( err ) {
	console.error( err );
}
```


## Examples

``` javascript
var rescape = require( 'utils-escape-regex-string' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-escape-regex-string.svg
[npm-url]: https://npmjs.org/package/utils-escape-regex-string

[travis-image]: http://img.shields.io/travis/kgryte/utils-escape-regex-string/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-escape-regex-string

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-escape-regex-string/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-escape-regex-string?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-escape-regex-string.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-escape-regex-string

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-escape-regex-string.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-escape-regex-string

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-escape-regex-string.svg
[github-issues-url]: https://github.com/kgryte/utils-escape-regex-string/issues
