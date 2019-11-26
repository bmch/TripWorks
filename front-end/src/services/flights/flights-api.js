import abuDhabi from './data/abu_dhabi.json'

const BASE_URL = 'http://localhost:3001'

let service = 'JSON'

export default { 
  getFlights: async () => {

    if (service === 'API') {
      console.log('Retrieving flights from API')
      return await fetchRequest(BASE_URL + `/veh-pos`);
    }
    else if (service === 'JSON') {

      // console.log('Getting flights from local JSON files')
      return await abuDhabi;
    }
  },
}

const fetchRequest = (url, options) => {
  return fetch(url, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });
}