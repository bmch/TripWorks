import flightsAPI from '../services/flights/flights-api'


export const fetchDataFlights = (data) => (dispatch) => { 
    return flightsAPI.getFlights().then(flightsList => 
      dispatch({
        type: 'SET_FLIGHTS', 
        data: flightsList,
      })
    )
    
    // return ({
    //     type: 'SET_FLIGHTS', 
    //     data: flightsAPI.getFlights,
    //   })

};