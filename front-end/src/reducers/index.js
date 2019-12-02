import {
  FETCH_DATA_LOADING,
  FETCH_DATA_LOADING_SUCCESS,
  FETCH_DATA_LOADING_FAILURE, SET_WEATHER, SET_WEATHER_TWO
} from '../constants';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import flights from './flights';
import getCityId from './hotels';
import { weather, weatherTwo } from './weather'



export const weather = (state = [], action) => {
  switch (action.type) {
    case SET_WEATHER:
      return action.data
    default:
      return state;
  }
}

export const weatherTwo = (state = [], action) => {
  switch (action.type) {
    case SET_WEATHER_TWO:
      return action.data
    default:
      return state;
  }
}

export const holidays = (state = [], action) => {}


export const fetchingTrips = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_TRIPS_COMPLETED':
      console.log('Fetching complete')
      return action.status;
    default:
      return state;
  }
};


export const tripResults = (state = [], action) => {
  switch (action.type) {
    case 'TRIP_RESULTS_COMPLETED':
      console.log('Results in store')
      return action.data;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({

  tripResults,
  flights,
  getCityId,
  holidays,
  itemLoading,
  itemLoadingError,
  fetchingTrips,
  form: formReducer,
  weather,
  weatherTwo
});


export default rootReducer;
