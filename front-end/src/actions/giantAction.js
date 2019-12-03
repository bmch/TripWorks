import flightAction from './flights';
import { fetchHotelData } from './hotels';
import { fetchDataFlights } from './flights';
import { fetchDataWeather } from './weather';
import { fetchPhotos } from './photos';
// import { addFormValues } from './addFormValues';

// const formData = {
//   backDate: "2019-12-13",
//   departure: "Barcelona",
//   depAirport: 'BCN',
//   // destination: "Madrid",
//   destinations: ['Paris', 'Rome', 'Athens', 'Los Angeles', 'Abu Dhabi'], 
//   airports: ['CDG', 'FCO', 'ATH', 'LAX', 'AUH'],
//   // "Rome", "Paris", "Sydney", "Los Angeles", "Singapore"],
//   goDate: "2019-12-08"
// }

function processResults( {formData, flights, hotels, weather, photos} ) {

  let days = weather.weatherForecast.length
  let hotelPrice = hotels[0].price_breakdown.all_inclusive_price;
  let cheapestHotel;
  switch (hotels[0].currency_code) {
    case 'USD': cheapestHotel = hotelPrice*0.91; break;
    case 'AED': cheapestHotel = hotelPrice*0.25; break;
    default: cheapestHotel = hotelPrice; break;
  }
  let lowestCombinedPrice = cheapestHotel + flights[0].cheapestPrice
  let priceScore;
  if (lowestCombinedPrice/days < 100) priceScore = 0.7 + 0.03 * Math.sqrt(100 - (lowestCombinedPrice/days))
  else priceScore = 0.7 - 0.03 * Math.sqrt((lowestCombinedPrice/days) - 100)

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
  };
}

const allAPIsAction = async (formData) => {
  const [flights, hotels, weather, photos] = await Promise.all([
    fetchDataFlights(formData),
    fetchHotelData(formData),
    fetchDataWeather(formData),
    fetchPhotos(formData)
  ])
  console.log('Results for 1 destination', flights, hotels, weather, photos)
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
  // return hotels
  return processResults({ formData, flights, hotels, weather, photos })
}

export const giantAction = async (formData) => {

  console.log('====================================')
  let pendingPromises = formData.destinations.map( (destination, index) => {
    // let airport = formData.airports[index]
    return allAPIsAction( { ...formData, destination, airport: formData.destAirports[index]} )
  })
  const results = await Promise.all(pendingPromises);
  results.sort((a, b) => b.finalScore - a.finalScore ) 
  console.log('Fetching complete')
  // dispatch({
  //   type: 'FETCHING_TRIPS',
  //   status: false
  // });
  // dispatch({
  //   type: 'TRIP_RESULTS',
  //   data: results
  // });
  return results
};