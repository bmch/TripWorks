// import {
//   FETCH_DATA_LOADING,
//   FETCH_DATA_LOADING_SUCCESS,
//   FETCH_DATA_LOADING_FAILURE
// } from '../constants';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import flights from './flights';
import getCityId from './hotels';


export const fetchingTrips = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_TRIPS_COMPLETED':
      console.log('Updating state')
      return action.status;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  flights,
  getCityId,
  fetchingTrips,
  form: formReducer
});

export default rootReducer;
