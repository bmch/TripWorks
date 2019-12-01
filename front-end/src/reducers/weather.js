import { SET_WEATHER, SET_WEATHER_TWO } from '../constants';

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