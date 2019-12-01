import ApiClient from '../services/__mock__/ApiClient';
import { useSelector } from 'react-redux';



export const fetchHotelData = (formData) => {
  // const destination1 = useSelector(state => state.form.userInput.values);

  console.log(formData)
  // dispatch(fetchDataLoading(true));

  return ApiClient.getCityIdByName(formData).then(hotelList => {
    //  dispatch(fetchDataLoading(false));
    //  dispatch(fetchDataSuccess(hotelList));
    // console.log(hotelList)

    let hotelsClosetoCC = hotelList.result.filter( el => el.distance_to_cc < 7)
    console.log('close hotels', hotelsClosetoCC)

    hotelsClosetoCC = hotelList.result.filter( el => el.min_total_price > 0)

    return hotelsClosetoCC
  });
};
