import barcelona from './cityId.json';
const json = require('../../webpack.config');


const BASE_URL = 'http://localhost:3001';

export default {
  getAllHotels: (city) => {
    // return fetchRequest('');
    
  },
  getCityIdByName: async () => {
    // return fetchRequest('');
    return await barcelona;
  }
}

const fetchRequest = (url) => {
  return fetch(url)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((error) => {
      console.log(`${error.message} while fetching ${url}`);  
    });
};