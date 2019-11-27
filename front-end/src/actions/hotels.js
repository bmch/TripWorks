import ApiClient from '../services/__mock__/ApiClient';

import { useSelector } from 'react-redux'

export const fetchHotelData = (data) => (dispatch) => {
  // const destination1 = useSelector(state => state.form.userInput.values); 
  
   ApiClient.getCityIdByName().then((hotelList) => {
    dispatch({
      type: 'GET_CITY_ID',
      data: hotelList
    })
    return Promise.resolve();
   });
};