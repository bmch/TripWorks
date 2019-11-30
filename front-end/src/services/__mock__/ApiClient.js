const BASE_URL = 'https://apidojo-booking-v1.p.rapidapi.com/';
const GET_CITYID_URL = 'locations/auto-complete?languagecode=en-us&text=';

export default {
  // getAllHotels: dest_id => {
  //   return fetchRequest(GET_PROPERTY_LIST_URL + dest_id);
  // },
  // destructure form data
  getCityIdByName: ({ destination1, goDate, backDate }) => {
    return fetchRequest(GET_CITYID_URL + destination1)
      .then(res => [res[0].dest_id, res[0].dest_type])
      .then(([id, type]) => {
        const GET_PROPERTY_LIST_URL = `properties/list?price_filter_currencycode=USD&travel_purpose=leisure&order_by=popularity&languagecode=en-us&search_type=${type}&offset=0&dest_ids=${id}&guest_qty=1&arrival_date=${goDate}&departure_date=${backDate}&room_qty=1`;
        return fetchRequest(GET_PROPERTY_LIST_URL);
      })
      .then(res => {
        console.log('result of get hotels', res);
        return res;
      });
  }
};

//TODO: add this to env file
const options = {
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  }
};

const fetchRequest = url => {
  console.log('TCL: fetchRequest -> url', url);
  return fetch(`${BASE_URL}${url}`, options)
    .then(res => (res.status <= 400 ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(error => {
      console.log(`${error.message} while fetching ${url}`);
    });
};
