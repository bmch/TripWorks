import ApiClient from '../services/__mock__/ApiClient';

import { useSelector } from 'react-redux';

export const fetchHotelData = formData => dispatch => {
  // const destination1 = useSelector(state => state.form.userInput.values);

  // dispatch(fetchDataLoading(true));

  ApiClient.getCityIdByName(formData).then(hotelList => {
    //  dispatch(fetchDataLoading(false));
    //  dispatch(fetchDataSuccess(hotelList));
    dispatch({
      type: 'GET_CITY_ID',
      data: hotelList
    });
    return Promise.resolve();
  });
};
