import { giantAction } from './giantAction'

import moment from 'moment'

export const addFormValues = ( {goDate, backDate, destList, departure}, history ) => async dispatch => {
  
  const wait = async (ms) => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  const formData = {
    departureCity: departure.googleData.terms[0].value,
    depAirport: departure.iata,
    goDate: moment(goDate).format('YYYY-MM-DD'),
    backDate: moment(backDate).format('YYYY-MM-DD'),
    destAirports: destList.map(destination => destination.iata),
    destinations: destList.map(destination => destination.googleData.terms[0].value)
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

  await wait(2000)

  // const results = await giantAction(formData)
  // dispatch({
  //   type: 'TRIP_RESULTS',
  //   data: results
  // })

  dispatch({
    type: 'FETCHING_TRIPS',
    status: false
  })
  history.push("/results")
}