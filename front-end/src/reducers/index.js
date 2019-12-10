import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import flights from './flights';
import getCityId from './hotels';
import { weather, weatherTwo } from './weather';
import { formValues } from './formValues';

export const fetchingTrips = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_TRIPS':
      return action.status;
    default:
      return state;
  }
};

export const loadingProgress = (state = 0, action) => {
  switch (action.type) {
    case 'LOG_PROGRESS':
      return state + action.status;
    default:
      return state;
  }
};

export const tripResults = (state = [], action) => {
  switch (action.type) {
    case 'TRIP_RESULTS':
      console.log('Results in store')
      return action.data;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  loadingProgress,
  flights,
  getCityId,
  form: formReducer,
  tripResults,
  fetchingTrips,
  weather,
  weatherTwo,
  formValues
});

export default rootReducer;
