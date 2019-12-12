import flightAction from './flights';
import { fetchHotelData } from './hotels';
import { fetchDataFlights } from './flights';
import { fetchDataWeather } from './weather';
import { fetchPhotos } from './photos';

function processResults( {formData, flights, hotels, weather, photos} ) {

  let days = weather.weatherForecast.length
  let hotelPrice = hotels[0].price_breakdown.all_inclusive_price;
  let exchangeRate = 1
  switch (hotels[0].currency_code) {
    case 'USD': exchangeRate = 0.91; break;
    case 'AED': exchangeRate = 0.25; break;
    case 'RMB': exchangeRate = 0.13; break;
    case 'HKD': exchangeRate = 0.12; break;
    default: exchangeRate = 1; break;
  }
  let lowestCombinedPrice = exchangeRate*hotelPrice + flights[0].cheapestPrice
  let priceScore;
  if (lowestCombinedPrice/days < 100) priceScore = 0.7 + 0.03 * Math.sqrt(100 - (lowestCombinedPrice/days))
  else priceScore = 0.7 - 0.03 * Math.sqrt((lowestCombinedPrice/days) - 100)

  return {
    city: formData.destination,
    dates: formData.dates,
    exchangeRate: exchangeRate,
    airports: [formData.depAirport, formData.airport],
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

const allAPIsAction = async (formData, dispatch) => {
  const [flights, hotels, weather, photos] = await Promise.all([
    fetchDataFlights(formData, dispatch),
    fetchHotelData(formData, dispatch),
    fetchDataWeather(formData),
    fetchPhotos(formData)
  ])
  console.log('Results for 1 destination', flights, hotels, weather, photos)
  return processResults({ formData, flights, hotels, weather, photos })
}

export const giantAction = async (formData, dispatch) => {

  console.log('====================================')
  let pendingPromises = formData.destinations.map( (destination, index) => {
    // let airport = formData.airports[index]
    return allAPIsAction( { ...formData, destination, airport: formData.destAirports[index]}, dispatch)
  })
  const results = await Promise.all(pendingPromises);
  results.sort((a, b) => b.finalScore - a.finalScore ) 
  console.log('Fetching complete')
  return results
};