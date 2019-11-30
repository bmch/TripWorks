import flightsAPI from '../services/flights/flights-api'


const userInput = {
  startingLocation: 'BCN',
  destinations: ['Madrid'],
  airports: ['MAD'],
  leaveDate: '2019-12-07',
  returnDate: '2019-12-10'
}

export const fetchDataFlights = (data) => { 

    return flightsAPI.getFlights().then(flightsList => {

      if (flightsList === 'Error') return Promise.resolve()
      console.log('flights list', flightsList)

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

      let res = {
        city: userInput.destinations[0],
        query: flightsList.Query,
        flightsData: cheapest
      }
      console.log('cheapest ' + i + ' fights: ', res);
      return res
    })
};