/* eslint-env mocha */

import assertThat from '../src/assertThat'
import Assert_ from '../src/Assert_'
import assert = require('assert')

describe('#assertThat()', () => {
  it('should return Assert_ instance', () => {
    const value = 'foo'
    const asserter = assertThat(value)
    assert.ok(asserter instanceof Assert_)
    assert.doesNotThrow(() => {
      asserter.is('foo')
    })
    const expected = 'bar'
    assert.throws(() => {
      asserter.is(expected)
    },
    {
      name: 'Error',
      message: `${value} is not equal to ${expected}`
    })
  })
})
