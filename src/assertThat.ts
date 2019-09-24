import Assert_ from './Assert_'

// NOTE: Below function will be public in Google Apps Script.
function assertThat (value: any): Assert_ {
  return new Assert_(value)
}

// NOTE: Below statement will be removed by clasp.
export default assertThat
