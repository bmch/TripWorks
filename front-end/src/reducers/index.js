import {
  FETCH_DATA_LOADING,
  FETCH_DATA_LOADING_SUCCESS,
  FETCH_DATA_LOADING_FAILURE, 
  SET_WEATHER, 
  SET_WEATHER_TWO,
  SET_CLIMATE_AVG
} from '../constants';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import flights from './flights';
import getCityId from './hotels';

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

export const holidays = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

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
  holidays,
  itemLoading,
  itemLoadingError,
  form: formReducer,
  weather,
  weatherTwo,
  // climateAvg
});

export default rootReducer;

// export const climateAvg = (state = {}, action) => {
//   switch (action.type) {
//     case SET_CLIMATE_AVG:
//       return action.data
//       default:
//         return state;
//   }
// }
