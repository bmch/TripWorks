import { getWeather } from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/services/weather/weather-api.js'
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/userInput/userInput.js';


export const fetchDataWeather = (city) => (dispatch, getState) => {
  return getWeather(city).then(weather => {

    const {goDate, backDate} = getState().form.userInput.values

    
    for (let i = 0; i < weather.data.length; i++) {
      console.log(goDate);
      
      if (weather.data[i].valid_date === goDate) {  
        // for (let j = i; j < weather.data.length; j++) {
        //   if (weather.data[i].valid_date !== dateSelected.backDate) {
            dispatch({
              type: 'SET_WEATHER',
              data: {
                city: weather.city_name,
                icon: weather.data[i].weather.icon,
                weather: weather.data[i].temp,
                desc: weather.data[i].weather.description,
                date: weather.data[i].valid_date,
                forecast: weather.data
              }
            })
        //   }
        // }
      }
    }
  })
}

export const fetchDataWeatherTwo = (city) => (dispatch, getState) => {
  
  return getWeather(city).then(weather => {
    const dateSelected = getState()
    for (let i = 0; i < weather.data.length; i++) {
      if (weather.data[i].valid_date === dateSelected.goDate) {
        // for (let j = i; j < weather.data.length; j++) {
        //   if (weather.data[i].valid_date !== dateSelected.backDate) {
            dispatch({
              type: 'SET_WEATHER_TWO',
              data: {
                city: weather.city_name,
                icon: weather.data[i].weather.icon,
                weather: weather.data[i].temp,
                desc: weather.data[i].weather.description,
                date: weather.data[i].valid_date,
                forecast: weather.data
              }
            })
          }
      //   }
      // }
    }
  })
}