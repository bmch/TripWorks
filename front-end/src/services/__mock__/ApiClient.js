const BASE_URL = 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?languagecode=en-us&text=';


export default {
  getAllHotels: (city) => {
    return fetchRequest(city);
    
  },
  getCityIdByName: (city) => {
    return fetchRequest(city);
  }
}

//TODO: add this to env file
const options = {
  headers: {
    "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
	"x-rapidapi-key": "c1a4f446b9msh0c76ada8c167fdap1b92aejsn40d8b5e89c91"
  }
} 

const fetchRequest = (url) => {
console.log("TCL: fetchRequest -> url", url) 
  return fetch(`${BASE_URL}${url}`, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((error) => {
      console.log(`${error.message} while fetching ${url}`);  
    });
};