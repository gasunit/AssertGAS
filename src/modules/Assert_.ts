// NOTE: Below class will be private in Google Apps Script.
class Assert_ {
  private readonly value: any

  constructor (value: any) {
    this.value = value
  }

  matches (callback: Function) {
    if (!callback(this.value)) {
      throw new Error(`${this.value} does not match to callback function`)
    }
  }

  doesNotMatch (callback: Function) {
    if (callback(this.value)) {
      throw new Error(`${this.value} matches to callback function`)
    }
  }

  is (expected: any) {
    if (this.value !== expected) {
      throw new Error(`${this.value} is not equal to ${expected}`)
    }
  }

  isNot (expected: any) {
    if (this.value === expected) {
      throw new Error(`${this.value} is equal to ${expected}`)
    }
  }

  isNull () {
    if (this.value !== null) {
      throw new Error(`${this.value} is not null`)
    }
  }

  isNotNull () {
    if (this.value === null) {
      throw new Error(`${this.value} is null`)
    }
  }

  isUndefined () {
    if (this.value !== undefined) {
      throw new Error(`${this.value} is not undefined`)
    }
  }

  isNotUndefined () {
    if (this.value === undefined) {
      throw new Error(`${this.value} is undefined`)
    }
  }

  isTrue () {
    if (this.value !== true) {
      throw new Error(`${this.value} is not true`)
    }
  }

  isFalse () {
    if (this.value !== false) {
      throw new Error(`${this.value} is not false`)
    }
  }
}

// NOTE: Below statement will be removed by clasp.
export default Assert_
