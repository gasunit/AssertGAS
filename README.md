[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
[![tested by ts-mocha](https://img.shields.io/badge/tested%20by-ts--mocha-%238d6748)](https://github.com/piotrwitek/ts-mocha)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# AssertGAS
Assertion library for Google Apps Script.
Compatible with [GASUnit](https://github.com/gasunit/GASUnit).

## Usage
### Add library
project key: `MWRSRXxKQuT_xRUeAjNzn4TVZgzu5bsVr`

### Write tests
```js
var exports = GASUnit.exports
var assertThat = AssertGAS.assertThat

function test_array () {
  exports({
    'Array': {
      '#indexOf()': {
        'should return -1 when not present': function () {
          var index = [1, 2, 3].indexOf(4)
          assertThat(index).is(-1)
        },
        'should return the index when present': function () {
          var index = [1, 2, 3].indexOf(3)
          assertThat(index).is(2)
        }
      }
    }
  })
}
```

## API
API is inspired by [AssertJ](https://joel-costigliola.github.io/assertj/).

### matches(callback)
```js
assertThat('foo').matches(function (value) {
  return value.startsWith('f')
})
```

### doesNotMatch(callback)
```js
assertThat('bar').doesNotMatch(function (value) {
  return value.startsWith('f')
})
```

### is(expected)
```js
assertThat('foo').is('foo')
```

### isNot(expected)
```js
assertThat('foo').isNot('bar')
```

### isNull()
```js
assertThat(null).isNull()
```

### isNotNull()
```js
assertThat(undefined).isNotNull()
```

### isUndefined()
```js
assertThat(undefined).isUndefined()
```

### isNotUndefined()
```js
assertThat(null).isNotUndefined()
```

### isTrue()
```js
assertThat(true).isTrue()
```

### isFalse()
```js
assertThat(false).isFalse()
```

## Development
See [package.json](package.json)
