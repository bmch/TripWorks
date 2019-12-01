import ApiClient from '../services/__mock__/ApiClient';
import { useSelector } from 'react-redux';



export const fetchHotelData = (formData) => {
  // const destination1 = useSelector(state => state.form.userInput.values);

  console.log(formData)
  // dispatch(fetchDataLoading(true));

  return ApiClient.getCityIdByName(formData).then(hotelList => {
    //  dispatch(fetchDataLoading(false));
    //  dispatch(fetchDataSuccess(hotelList));
    dispatch({
      type: 'GET_CITY_ID',
      data: hotelList
    });
    return Promise.resolve();
   });
};
