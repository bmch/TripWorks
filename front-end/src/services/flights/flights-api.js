import abuDhabi from './data/abu_dhabi.json'
import madrid from './data/madrid.json'

const i = 0
const service = 'API'

const urlServer = 'http://localhost:3002/postFlights'

const serverOptions = (userInput) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'location': ''
    },
    body: JSON.stringify(APIOptions(userInput, 0)) // body data type must match "Content-Type"
  }
} 

const APIOptions = (userInput) =>  {
  return {
    method: 'POST',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
    headers: {
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': 'd73262c0c5mshb2577f45e0ed356p16537fjsn640bfa5edab3',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form: {
      inboundDate: userInput.backDate,
      cabinClass: 'economy',
      children: '0',
      infants: '0',
      country: 'US',
      currency: 'EUR',
      locale: 'en-US',
      originPlace: `${userInput.depAirport}-sky`,
      destinationPlace: `${userInput.airport}-sky`,
      outboundDate: userInput.goDate,
      adults: '1'
    }
  }
}

export default async (userInput) => {

  if (service === 'abuDhabi') {
      console.log('Getting flights from local JSON files')
      return await abuDhabi;
  }
  if (service === 'madrid') {
    console.log('Getting flights from local JSON files')
    return await madrid;

  } else if (service === 'API') {
    console.log('POST to Skyscanner API via server')
    let locationString = await postRequest(urlServer, serverOptions(userInput))
    if (!locationString ) return 'Error while fetching'
    console.log('POST response', locationString);
    const locArr = locationString.split('/')
    const sessionKey = locArr[locArr.length -1];
    
    console.log('Sending skyscanner GET request')
    let updates = 'Pending'
    let flightsList = {};

    while (updates === 'Pending') {
      await wait(2000);
      flightsList = await getRequest(sessionKey);
      if (flightsList.ValidationErrors) console.log('Error, reattempting request' + flightsList.ValidationErrors[0].Message)
      else if (flightsList.Status === 'UpdatesComplete') {
        updates = 'Completed';
        console.log('Response from skyscanner: ', flightsList);
      } else console.log('Updates Pending, reattempting request')
    }
    return flightsList;
  }
}

const wait = async (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const postRequest = (url, options) => {
  // console.log(options)
  return fetch(url, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => {
      console.log(res)
      return res.headers.get('location');
    })
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    })
};

const getRequest = (sessionKey) => {
  return fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${sessionKey}?stops=0`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "d73262c0c5mshb2577f45e0ed356p16537fjsn640bfa5edab3"
    }
  }).then(response => {
    return response.json();
  }).catch(err => {
    console.log(err);
  });
};

// const fetchRequest = (url, options) => {
//   return fetch(url, options)
//     .then(res => res.status <= 400 ? res : Promise.reject(res))
//     .then(res => res.json())
//     .catch((err) => {
//       console.log(`${err.message} while fetching /${url}`)
//     });
// }