import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import flights from './flights';
import getCityId from './hotels';
import { weather, weatherTwo } from './weather';
import { formValues } from './formValues';

export const holidays = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

export const itemLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:

    export const fetchingTrips = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_TRIPS_COMPLETED':
      console.log('Fetching complete');
      return action.status;
    default:
      return state;
  }
};
}
}

export const tripResults = (state = [], action) => {
  switch (action.type) {
    case 'TRIP_RESULTS_COMPLETED':
      console.log('Results in store')
      // console.log(JSON.stringify(action.data))
      return action.data;
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
  tripResults,
  fetchingTrips,
  weather,
  weatherTwo,
  formValues
});

export default rootReducer;
