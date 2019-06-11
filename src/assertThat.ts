import Assert_ from './modules/Assert_'

// NOTE: Below function will be public in Google Apps Script.
function assertThat (value: any) {
  return new Assert_(value)
}

// NOTE: Below statement will be removed by clasp.
export default assertThat
