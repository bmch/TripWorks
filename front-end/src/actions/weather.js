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
        case 803: case 804: score = 0.75; break;
        case 300: case 301: case 700: case 711: score = 0.55; break;
        case 302: case 500: case 721: case 731: score = 0.35; break;
        default: score = 0; break;
      }
      score = score + tempScore(el.app_max_temp, el.app_min_temp)
      weatherScoreArr.push(score/2)
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
  })
}

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
  })
}

// export const fetchAvg = () => (dispatch, getState) => {
//   // return getClimate().then(climate => {
//     const { goDate, backDate, destination1 } = getState().form.userInput.values
    
//     // console.log(climate[0].city)
//     // let month = new Date(goDate).getMonth() + 1
//     // console.log(destination1)
//     let avg;

//     for (let i = 0; i < climate.length; i++) {

//       if (climate[i].city === destination1) {
//         console.log(climate[i].city)
//         console.log(climate[i].monthlyAvg)
//         for (let j = 0; j < climate[i].monthlyAvg.length; j++) {
//           avg = climate[i].monthlyAvg[(new Date(goDate).getMonth() + 1)]
//         }
//       }
//       return avg
//     }
//     // const avg = Climate.forEach(el => city === el.city ? Climate.monthlyAvg : "no data available")

//     dispatch({
//       type: 'SET_CLIMATE_AVG',
//       data: avg

//     })
//   // })
// }

// export const fetchDataWeather = (city) => (dispatch, getState) => {
//   return getWeather(city).then(weather => {

//     const { goDate, backDate } = getState().form.userInput.values

//     const startDate = new Date(goDate)
//     // console.log(startDate) 
//     const endDate = new Date(backDate)
//     // console.log(endDate)

//     var gooDate = new Date(startDate);
//     var gMilliseconds = gooDate.getTime();

//     var baackDate = new Date(endDate)
//     var bMilliseconds = baackDate.getTime();

//     const forecast = weather.data.filter(el => new Date(el.valid_date).getTime() >= gMilliseconds && new Date(el.valid_date).getTime() <= bMilliseconds)
//     console.log(forecast)

//     for (let i = 0; i < weather.data.length; i++) {

//       if (weather.data[i].valid_date === goDate) {
//         // for (let j = i; j < weather.data.length; j++) {
//         //   if (weather.data[j].valid_date !== goDate) {

//             dispatch({
//               type: 'SET_WEATHER',
//               data: {
//                 city: weather.city_name,
//                 icon: weather.data[i].weather.icon,
//                 weather: weather.data[i].temp,
//                 desc: weather.data[i].weather.description,
//                 date: weather.data[i].valid_date,
//                 forecast: weather.data
//               }
//             })
//           }
//         }
//       }
//   //   }
//   // }
//   )
// }









// weather.data.filter( el => Number(weather.data[el].valid_date) >= Number(goDate) && Number(weather.data[el].valid_date) <= Number(backDate))
