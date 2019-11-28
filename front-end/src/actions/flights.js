import flightsAPI from '../services/flights/flights-api'


export const fetchDataFlights = (data) => (dispatch) => { 
    return flightsAPI.getFlights().then(flightsList => {
      if (flightsList === 'Error') return Promise.resolve(); 
      console.log('flights list', flightsList)

      const itineraries = flightsList.Itineraries;
      itineraries.sort((a, b) => a.PricingOptions[0].Price - b.PricingOptions[0].Price);
      if (itineraries.length > 2) var len = 3
      else var len = itineraries.length
      let cheapest = [];
      switch (len) {
        case 1: cheapest = [itineraries[0]]
        case 2: cheapest = [itineraries[0], itineraries[1]]
        case 3: cheapest = [itineraries[0], itineraries[1], itineraries[2]]
      }
      console.log(cheapest);
      cheapest.forEach(el => {
        el.cheapestAgentId = el.PricingOptions[0].Agents[0];
        el.CheapestAgent = flightsList.Agents.find(agent => agent.Id === el.PricingOptions[0].Agents[0])
      })
      console.log(cheapest);
      dispatch({
        type: 'SET_FLIGHTS', 
        data: flightsList,
      })
      return Promise.resolve();
    })
    
    // return ({
    //     type: 'SET_FLIGHTS', 
    //     data: flightsAPI.getFlights,
    //   })

};