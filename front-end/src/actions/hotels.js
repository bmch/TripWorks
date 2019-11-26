import ApiClient from '../services/__mock__/ApiClient';

export const fetchHotelData = (city) => (dispatch, getState) => {
  return ApiClient.getCityIdByName().then((hotelList) => {
    dispatch({
      type: 'GET_CITY_ID',
      payload: hotelList
    });
    return Promise.resolve();
  });
};