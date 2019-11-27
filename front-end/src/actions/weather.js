import {getWeather} from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/services/weather/weather-api.js'


export const fetchDataWeather = (city) => (dispatch) => { 
    return getWeather(city).then(weather => 
      dispatch({
        type: 'SET_WEATHER', 
        data: weather
      })
    )
};