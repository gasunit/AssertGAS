/* eslint-env mocha */

import Assert_ from '../src/Assert_'
import assert = require('assert')

describe('Assert_', () => {
  const assertThat = (value: any) => new Assert_(value)

  describe('#matches()', () => {
    describe('when value matches to callback function', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat('foo').matches((value: string) => value.startsWith('f'))
        })
      })
    })
    describe('when value does not match to callback function', () => {
      it('should throw error', () => {
        const value = 'bar'
        assert.throws(() => {
          assertThat(value).matches((value: string) => value.startsWith('f'))
        },
        {
          name: 'Error',
          message: `${value} does not match to callback function`
        })
      })
    })
  })

  describe('#doesNotMatch()', () => {
    describe('when value does not match to callback function', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat('bar').doesNotMatch((value: string) => value.startsWith('f'))
        })
      })
    })
    describe('when value matches to callback function', () => {
      it('should throw error', () => {
        const value = 'foo'
        assert.throws(() => {
          assertThat(value).doesNotMatch((value: string) => value.startsWith('f'))
        },
        {
          name: 'Error',
          message: `${value} matches to callback function`
        })
      })
    })
  })

  describe('#is()', () => {
    describe('when value is equal to argument', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat('foo').is('foo')
        })
      })
    })
    describe('when value is not equal to argument', () => {
      it('should throw error', () => {
        const value = 'foo'
        const expected = 'bar'
        assert.throws(() => {
          assertThat(value).is(expected)
        },
        {
          name: 'Error',
          message: `${value} is not equal to ${expected}`
        })
      })
    })
  })

  describe('#isNot()', () => {
    describe('when value is not equal to argument', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat('foo').isNot('bar')
        })
      })
    })
    describe('when value is equal to argument', () => {
      it('should throw error', () => {
        const value = 'foo'
        const expected = 'foo'
        assert.throws(() => {
          assertThat(value).isNot(expected)
        },
        {
          name: 'Error',
          message: `${value} is equal to ${expected}`
        })
      })
    })
  })

  describe('#isNull()', () => {
    describe('when value is null', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat(null).isNull()
        })
      })
    })
    describe('when value is not null', () => {
      it('should throw error', () => {
        const value = undefined
        assert.throws(() => {
          assertThat(value).isNull()
        },
        {
          name: 'Error',
          message: `${value} is not null`
        })
      })
    })
  })

  describe('#isNotNull()', () => {
    describe('when value is not null', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat(undefined).isNotNull()
        })
      })
    })
    describe('when value is null', () => {
      it('should throw error', () => {
        const value = null
        assert.throws(() => {
          assertThat(value).isNotNull()
        },
        {
          name: 'Error',
          message: `${value} is null`
        })
      })
    })
  })

  describe('#isNot()', () => {
    describe('when value is not equal to argument', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat('foo').isNot('bar')
        })
      })
    })
    describe('when value is equal to argument', () => {
      it('should throw error', () => {
        const value = 'foo'
        const expected = 'foo'
        assert.throws(() => {
          assertThat(value).isNot(expected)
        },
        {
          name: 'Error',
          message: `${value} is equal to ${expected}`
        })
      })
    })
  })

  describe('#isUndefined()', () => {
    describe('when value is undefined', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat(undefined).isUndefined()
        })
      })
    })
    describe('when value is not undefined', () => {
      it('should throw error', () => {
        const value = null
        assert.throws(() => {
          assertThat(value).isUndefined()
        },
        {
          name: 'Error',
          message: `${value} is not undefined`
        })
      })
    })
  })

  describe('#isNotUndefined()', () => {
    describe('when value is not undefined', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat(null).isNotUndefined()
        })
      })
    })
    describe('when value is undefined', () => {
      it('should throw error', () => {
        const value = undefined
        assert.throws(() => {
          assertThat(value).isNotUndefined()
        },
        {
          name: 'Error',
          message: `${value} is undefined`
        })
      })
    })
  })

  describe('#isTrue()', () => {
    describe('when value is true', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat(true).isTrue()
        })
      })
    })
    describe('when value is not true', () => {
      it('should throw error', () => {
        const value = false
        assert.throws(() => {
          assertThat(value).isTrue()
        },
        {
          name: 'Error',
          message: `${value} is not true`
        })
      })
    })
  })

  describe('#isFalse()', () => {
    describe('when value is false', () => {
      it('should not throw error', () => {
        assert.doesNotThrow(() => {
          assertThat(false).isFalse()
        })
      })
    })
    describe('when value is not false', () => {
      it('should throw error', () => {
        const value = true
        assert.throws(() => {
          assertThat(value).isFalse()
        },
        {
          name: 'Error',
          message: `${value} is not false`
        })
      })
    })
  })
})
