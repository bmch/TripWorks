import { getWeather } from '../services/weather/weather-api'

export const fetchDataWeather = ( {destination, goDate, backDate}) => {

  return getWeather(destination).then(weather => {

    console.log(weather)

    const weatherForecast = weather.data.filter(el => new Date(el.valid_date).getTime() >= new Date(goDate).getTime() && new Date(el.valid_date).getTime() <= new Date(backDate).getTime())

    console.log(`weather data for ${destination}`, weatherForecast)

    let weatherArray = [800, 801, 802, 803, 804, 300, 301, 302, 500, 601]
    
    const tempScore = (max, min) => {
      let score = 0.04*(Math.abs(max-25)+0.03*(Math.abs(min-18)))
      if (score > 1) return 0
      else return 1 - score
    }

    let weatherScoreArr = []
    weatherForecast.forEach(el => {
      let score;
      switch (el.weather.code) {
        case 800: score = 1; break;
        case 801: case 802: score = 0.9; break;
        case 803: case 804: case 300: score = 0.75; break;
        case 300: score = 0.67; break;
        case 700: case 711: score = 0.55; break;
        case 301: case 500: case 520: score = 0.44; break;
        case 721: case 731: score = 0.35; break;
        case 302: case 501: case 521: score = 0.22; break;
        default: score = 0; break;
      }
      let totalScore = 0.67 * score + 0.33 * tempScore(el.app_max_temp, el.app_min_temp)
      weatherScoreArr.push(totalScore)
    })
    
    let weatherScore = 0;
    weatherScoreArr.forEach(el => {
      weatherScore = weatherScore + el
    })
    weatherScore = weatherScore/weatherScoreArr.length
    console.log(weatherScore, weatherScoreArr)

    return {
      weatherForecast:  weatherForecast,
      weatherScore: weatherScore
    }
  })
}

// export const fetchDataWeatherOne = (city) => (dispatch, getState) => {
//   return getWeather(city).then(weather => {
//     let theForecast;
//     const { goDate, backDate } = getState().form.userInput.values
//     const forecast = weather.data.filter(el => new Date(el.valid_date).getTime() >= new Date(goDate).getTime() && new Date(el.valid_date).getTime() <= new Date(backDate).getTime())
//     theForecast = forecast
//     dispatch({
//       type: 'SET_WEATHER_TWO',
//       data: theForecast
//     })
// })}

