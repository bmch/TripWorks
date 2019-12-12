import flightsAPI from '../services/flights/flights-api'

export const fetchDataFlights = (data, dispatch) => { 

  return flightsAPI(data).then(flightsList => {

    if (flightsList === 'Error') return Promise.reject()
    // console.log('flights list', flightsList)
    const itineraries = flightsList.Itineraries
    itineraries.sort((a, b) => a.PricingOptions[0].Price - b.PricingOptions[0].Price)

    let i = 0
    let cheapest = []
    while (i < 5 && itineraries[i]) {
      cheapest.push(itineraries[i])
      i++
    }
    cheapest.forEach(el => {
      el.cheapestAgentId = el.PricingOptions[0].Agents[0]
      el.cheapestAgent = flightsList.Agents.find(agent => agent.Id === el.PricingOptions[0].Agents[0])
      el.cheapestPrice = el.PricingOptions[0].Price
    })
    console.log('cheapest ' + i + ' flights: ', cheapest);
    dispatch({
      type: 'LOG_PROGRESS',
      status: 1,
    })
    return cheapest;
  })
};