import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import flights from './flights';
import getCityId from './hotels';
import { weather, weatherTwo } from './weather'

export const fetchingTrips = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_TRIPS_COMPLETED':
      console.log('Updating state')
      return action.data;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({

  flights,
  getCityId,
  fetchingTrips,
  form: formReducer,
  weather,
  weatherTwo
});


export default rootReducer;
