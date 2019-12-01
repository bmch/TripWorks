import {FETCH_DATA_LOADING_SUCCESS, FETCH_DATA_LOADING_FAILURE, FETCH_DATA_LOADING } from '../constants';

import flightAction from './flights'
import { fetchHotelData } from './hotels'
import { fetchDataFlights } from './flights'
import { fetchDataWeather } from './weather'
import { fetchPhotos } from './photos'

const formData = {
  backDate: "2019-12-10",
  departure: "Barcelona",
  depAirport: 'BCN',
  // destination: "Madrid",
  destinations: ['Madrid', 'Paris', 'Rome'], 
  airports: ['MAD', 'CDG', 'FCO'],
  // "Rome", "Paris", "Sydney", "Los Angeles", "Singapore"],
  goDate: "2019-12-07"
}

let resultsArray = [];

function processResults({formData, hotels, flights, weather, photos}) {

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
    finalScore: 10 * (0.6 * priceScore + 0.4 * weather.weatherScore),
    photos: photos
  }
}

const allAPIsAction = async (dispatch, formData) => {
  // flights, , weather, photos
  const [hotels] = await Promise.all([
    // fetchDataFlights(formData),
    fetchHotelData(formData),
    // fetchDataWeather(formData),
    // fetchPhotos(formData)
  ])
  console.log('Results for 1 destination', hotels)
  // , hotels, weather, photos)
  // dispatch({
  //   type: 'SET_FLIGHTS', 
  //   data: flights,
  // })
  // dispatch({
  //   type: 'SET_HOTELS',
  //   data: hotels,
  // })
  // dispatch({
  //   type: 'SET_WEATHER',
  //   data: weather
  // })
  return hotels
  // return processResults({ formData, hotels, flights, weather, photos })
}

export const giantAction = () => async dispatch => {

  console.log('====================================')
  let pendingPromises = formData.destinations.map( (destination, index) => {
    let airport = formData.airports[index]
    allAPIsAction(dispatch, { ...formData, destination, airport })
  })
  const results = await Promise.all(pendingPromises);
  dispatch({
    type: 'FETCHING_TRIPS_COMPLETED',
    status: true,
  })
  dispatch({
    type: 'TRIP_RESULTS_COMPLETED',
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