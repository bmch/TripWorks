import {FETCH_DATA_LOADING_SUCCESS, FETCH_DATA_LOADING_FAILURE, FETCH_DATA_LOADING } from '../constants';

import flightAction from './flights'
import { fetchHotelData } from './hotels'
import { fetchDataFlights } from './flights'
import { fetchDataWeather } from './weather'

const formData = {
  backDate: "2019-12-10",
  departure: "Barcelona",
  // destination: "Madrid",
  destinations: ["Madrid", "Madrid"], 
  // "Rome", "Paris", "Sydney", "Los Angeles", "Singapore"],
  goDate: "2019-12-07"
}

let resultsArray = [];

function processResults({formData, hotels, flights, weather}) {

  let days = weather.weatherForecast.length
  let lowestCombinedPrice = hotels[0].price_breakdown
    .all_inclusive_price + flights.flightsData[0].cheapestPrice
  let priceScore;
  if (lowestCombinedPrice/days < 100) priceScore = 0.7 + 0.03 * Math.sqrt(100 - (lowestCombinedPrice/days))
  else priceScore = 0.7 - 0.03 * Math.sqrt((100*days)-lowestCombinedPrice)

  return {
    city: formData.destination,
    lowestCombinedPrice: lowestCombinedPrice,
    hotels: hotels,
    flights: flights,
    weather: weather,
    day: days,
    priceScore: priceScore,
    finalScore: 10 * (0.6 * priceScore + 0.4 * weather.weatherScore)
  }
}

const allAPIsAction = async (dispatch, formData) => {
  const [hotels, flights, weather] = await Promise.all([
    fetchHotelData(formData),
    fetchDataFlights(formData),
    fetchDataWeather(formData.destination, formData.goDate, formData.backDate)
  ])
  console.log('Final results', hotels, flights, weather)
  dispatch({
    type: 'SET_FLIGHTS', 
    data: flights,
  })
  dispatch({
    type: 'SET_HOTELS',
    data: hotels,
  })
  dispatch({
    type: 'SET_WEATHER',
    data: weather
  })
  return processResults({ formData, hotels, flights, weather })
}

export const giantAction = () => async dispatch => {
  let pendingPromises = formData.destinations.map(destination => 
    allAPIsAction(dispatch, { ...formData, destination })
  )
  const results = await Promise.all(pendingPromises);
  dispatch({
    type: 'FETCHING_TRIPS_COMPLETED',
    status: true,
    data: results
  });
}
  
// export const weatherAction = () => dispatch => {

//   return formData.destinations.forEach( (el, index) => {

//     fetchDataWeather(el, formData.goDate, formData.backDate).then(weatherForecast => {
//       dispatch({
//         type: 'SET_WEATHER',
//         data: weatherForecast
//       })
//       return Promise.resolve(weatherForecast)
//     })
//   })
// }

  

    // let fetchHotels = fetchHotelData(formData).then(hotelList => {
    //   dispatch({
    //     type: 'SET_HOTELS',
    //     data: hotelList,
    //   })
    //   return Promise.resolve( {city: formData.destination, hotelsData: hotelList} )
    // })

    // let fetchFlights = fetchDataFlights().then(flightsList => { 
    //   dispatch({
    //     type: 'SET_FLIGHTS', 
    //     data: flightsList,
    //   })
    //   return Promise.resolve(flightsList);
    // })

    // let fetchWeather = fetchDataWeather(formData.destination, formData.goDate, formData.backDate).then(weatherForecast => {
    //   dispatch({
    //     type: 'SET_WEATHER',
    //     data: weatherForecast
    //   })
    //   return Promise.resolve(weatherForecast)
    // })

    // await Promise.all([fetchHotels, fetchFlights, fetchWeather])
    //   .then(( [hotels, flights, weather] ) => {

    //     let days = weather.weatherForecast.length
    //     let lowestCombinedPrice = hotels.hotelsData[0].price_breakdown
    //       .all_inclusive_price + flights.flightsData[0].cheapestPrice
    //     let priceScore;
    //     if (lowestCombinedPrice/days < 100) priceScore = 0.7 + 0.03*Math.sqrt(100 - (lowestCombinedPrice/days))
    //     else priceScore = 0.7 - 0.03*Math.sqrt((100*days)-lowestCombinedPrice)

    //     let cityData = {
    //       city: hotels.city,
    //       lowestCombinedPrice: lowestCombinedPrice,
    //       hotels: hotels.hotelsData,
    //       flights: flights,
    //       weather: weather,
    //       day: days,
    //       priceScore: priceScore,
    //       finalScore: 0.6 * priceScore + 0.4 * weather.weatherScore
    //     }
    //     console.log('Data from all APIs', cityData)

    //     resultsArray.push(cityData)
    //   })