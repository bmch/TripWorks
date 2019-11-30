<<<<<<< HEAD
// import {
//   FETCH_DATA_LOADING,
//   FETCH_DATA_LOADING_SUCCESS,
//   FETCH_DATA_LOADING_FAILURE
// } from '../constants';
=======
import {
  FETCH_DATA_LOADING,
  FETCH_DATA_LOADING_SUCCESS,
  FETCH_DATA_LOADING_FAILURE, SET_WEATHER, SET_WEATHER_TWO
} from '../constants';
>>>>>>> 7b6bc05f04dedb592c9c063cd9de244fba4f4252
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import flights from './flights';
import getCityId from './hotels';

<<<<<<< HEAD
=======




export const weather = (state = {}, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return action.data
    default:
      return state;
  }

}

export const weatherTwo = (state = {}, action) => {
  switch (action.type) {
    case SET_WEATHER_TWO:
      return action.data
    default:
      return state;
  }
}

export const holidays = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING_SUCCESS:
      return action.data;
    default:
      return state;
  }
};
>>>>>>> 7b6bc05f04dedb592c9c063cd9de244fba4f4252

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
<<<<<<< HEAD
  fetchingTrips,
  form: formReducer
});
=======
  holidays,
  itemLoading,
  itemLoadingError,
  form: formReducer,
  weather,
  weatherTwo

>>>>>>> 7b6bc05f04dedb592c9c063cd9de244fba4f4252

export default rootReducer;
