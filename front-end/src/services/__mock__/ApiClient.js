const BASE_URL = 'https://apidojo-booking-v1.p.rapidapi.com/';
const GET_CITYID_URL = 'locations/auto-complete?languagecode=en-us&text=';

export default async ({ destination, goDate, backDate }) => {
  console.log('fetching destination id', destination)
  let res;
  while (!res) {
    res = await fetchRequest(GET_CITYID_URL + destination)
  }
  const [id, type] = [res[0].dest_id, res[0].dest_type]
  const GET_PROPERTY_LIST_URL = `properties/list?price_filter_currencycode=USD&travel_purpose=leisure&categories_filter=price%253A%253A9-40%252Cfree_cancellation%253A%253A1%252Cclass%253A%253A5%252Cclass%253A%253A4%252Cclass%253A%253A3&search_id=none&order_by=price&order_by=popularity&languagecode=en-us&search_type=${type}&offset=0&dest_ids=${id}&guest_qty=1&arrival_date=${goDate}&departure_date=${backDate}&room_qty=1`;
  
  console.log('fetching hotels', GET_PROPERTY_LIST_URL)
  let hotelsList={};
  while (!hotelsList || !hotelsList.result) {
    hotelsList = await fetchRequest(GET_PROPERTY_LIST_URL)  
  }
  console.log('hotels list', hotelsList);
  return hotelsList;
}

//TODO: add this to env file
const options = {
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  }
};

const fetchRequest = url => {
  return fetch(`${BASE_URL}${url}`, options)
    .then(res => ((res.status < 400) ? res : Promise.reject(res)) )
    .then(res => res.json())
    .catch(error => {
      console.log(error, 'while fetching');
    });
};