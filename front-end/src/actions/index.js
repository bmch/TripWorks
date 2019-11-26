import {FETCH_DATA_SUCCESS, FETCH__ERROR, FETCH_DATA_PENDING} from '../constants';

// import flights from './flights'

function fetchDataPending() {
  return {
      type: FETCH_DATA_PENDING
  }
}

function fetchDataSuccess(data) {
  return {
      type: FETCH_DATA_SUCCESS,
      data: data
  }
}

function fetchDataError(error) {
  return {
      type: FETCH__ERROR,
      error: error
  }
}
