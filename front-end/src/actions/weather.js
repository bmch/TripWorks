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
