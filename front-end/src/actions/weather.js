import { getWeather } from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/services/weather/weather-api.js'

export const fetchDataWeather = (city) => (dispatch, getState) => {
  return getWeather(city).then(weather => {

    let theForecast;

    const { goDate, backDate } = getState().form.userInput.values

    const forecast = weather.data.filter(el => new Date(el.valid_date).getTime() >= new Date(goDate).getTime() && new Date(el.valid_date).getTime() <= new Date(backDate).getTime())

    theForecast = forecast

    dispatch({
      type: 'SET_WEATHER',
      data: theForecast
    
    })
})}

export const fetchDataWeatherTwo = (city) => (dispatch, getState) => {
  return getWeather(city).then(weather => {

    let theForecast;

    const { goDate, backDate } = getState().form.userInput.values

    const forecast = weather.data.filter(el => new Date(el.valid_date).getTime() >= new Date(goDate).getTime() && new Date(el.valid_date).getTime() <= new Date(backDate).getTime())

    theForecast = forecast

    dispatch({
      type: 'SET_WEATHER_TWO',
      data: theForecast
    
    })
})}

