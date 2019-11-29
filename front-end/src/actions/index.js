import {FETCH_DATA_LOADING_SUCCESS, FETCH_DATA_LOADING_FAILURE, FETCH_DATA_LOADING } from '../constants';

import flightAction from './flights'
import hotelAction from './hotels'

function bigGiantAction() {

  flightAction(data)
  hotelAction(data)

}

function fetchDataloading() {
  return {
      type: FETCH_DATA_LOADING
  }
}

function fetchDataLoadingSuccess (data) {
  return {
      type: FETCH_DATA_LOADING_SUCCESS,
      data
  }
}

function fetchDataLoadingError(error) {
  return {
      type: FETCH_DATA_LOADING_FAILURE,
      error
  }
}
