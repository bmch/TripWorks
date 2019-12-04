import { giantAction } from './giantAction'

import moment from 'moment'

export const addFormValues = ( {goDate, backDate, destList, departure}, history ) => async dispatch => {
  
  const wait = async (ms) => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  const formData = {
    dates: [goDate, backDate],
    departureCity: departure.googleData.terms[0].value,
    depAirport: departure.iata,
    goDate: moment(goDate).format('YYYY-MM-DD'),
    backDate: moment(backDate).format('YYYY-MM-DD'),
    destAirports: destList.map(destination => destination.iata),
    destinations: destList.map(destination => destination.airportData.response[0].place.city)
  }
  console.log(formData)
  dispatch({
    type: 'SET_FORM_VALUES',
    data: formData
  })
  dispatch({
    type: 'FETCHING_TRIPS',
    status: true
  })
  history.push("/loading")
  // await wait(2000)

  const results = await giantAction(formData, dispatch)
  console.log(results)
  
  dispatch({
    type: 'TRIP_RESULTS',
    data: results
  })
  
  await wait(1000)
  history.push("/results")

  dispatch({
    type: 'FETCHING_TRIPS',
    status: false
  })
}