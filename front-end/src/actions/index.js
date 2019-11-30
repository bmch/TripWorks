import {FETCH_DATA_LOADING_SUCCESS, FETCH_DATA_LOADING_FAILURE, FETCH_DATA_LOADING } from '../constants';

import flightAction from './flights'
import { fetchHotelData } from './hotels'
import { fetchDataFlights } from './flights'

const formData = {
  backDate: "2019-12-10",
  departure: "Barcelona",
  destination1: "Madrid",
  goDate: "2019-12-07"
}

export const bigGiantAction = () => dispatch => {

  console.log('Big action start')

  // let promise1 = new Promise(function(resolve, reject) {
  let fetchHotels = fetchHotelData(formData).then(hotelList => {
    dispatch({
      type: 'SET_HOTELS',
      data: hotelList,
    })
    return Promise.resolve( {city: formData.destination1, hotelsData: hotelList} )
  })

  let fetchFlights = fetchDataFlights().then(flightsList => { 
    dispatch({
      type: 'SET_FLIGHTS', 
      data: flightsList,
    })
    return Promise.resolve(flightsList);
  })

  return Promise.all([fetchHotels, fetchFlights])
    .then(( [hotels, flights] ) => {
      let cityData = {
        city: hotels.city,
        lowestCombinedPrice: hotels.hotelsData[0].price_breakdown.all_inclusive_price + flights.flightsData[0].cheapestPrice,
        hotels: hotels,
        flights: flights,
      }
      console.log('Data from all APIs', cityData)

      })
    .then( () => {
        return dispatch({
          type: 'FETCHING_TRIPS_COMPLETED',
          status: true
        })
      })
}
    

    // .then(res => resolve(res))
  // })

  // // flightAction(formData)
  
  // 