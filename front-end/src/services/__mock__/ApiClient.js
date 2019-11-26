const BASE_URL = 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?languagecode=en-us&text=';

export default {
  getAllHotels: (city) => {
    return fetchRequest(city);
    
  },
  getCityIdByName: (city) => {
    return fetchRequest('');
  }
}

const fetchRequest = (url) => {
  return fetch(`${BASE_URL}/${url}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((error) => {
      console.log(`${error.message} while fetching ${url}`);  
    });
};