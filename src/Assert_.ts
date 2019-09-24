// NOTE: Below class will be private in Google Apps Script.
class Assert_ {
  private readonly value: any

  constructor (value: any) {
    this.value = value
  }

  matches (callback: (value: any) => boolean): void {
    if (!callback(this.value)) {
      throw new Error(`${this.value} does not match to callback function`)
    }
  }

  doesNotMatch (callback: (value: any) => boolean): void {
    if (callback(this.value)) {
      throw new Error(`${this.value} matches to callback function`)
    }
  }

  is (expected: any): void {
    if (this.value !== expected) {
      throw new Error(`${this.value} is not equal to ${expected}`)
    }
  }

  isNot (expected: any): void {
    if (this.value === expected) {
      throw new Error(`${this.value} is equal to ${expected}`)
    }
  }

  isNull (): void {
    if (this.value !== null) {
      throw new Error(`${this.value} is not null`)
    }
  }

  isNotNull (): void {
    if (this.value === null) {
      throw new Error(`${this.value} is null`)
    }
  }

  isUndefined (): void {
    if (this.value !== undefined) {
      throw new Error(`${this.value} is not undefined`)
    }
  }

  isNotUndefined (): void {
    if (this.value === undefined) {
      throw new Error(`${this.value} is undefined`)
    }
  }

  isTrue (): void {
    if (this.value !== true) {
      throw new Error(`${this.value} is not true`)
    }
  }

  isFalse (): void {
    if (this.value !== false) {
      throw new Error(`${this.value} is not false`)
    }
  }
}

// NOTE: Below statement will be removed by clasp.
export default Assert_
