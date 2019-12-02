import HotelsAPI from '../services/__mock__/ApiClient';
import { useSelector } from 'react-redux';



// export const fetchHotelData = (formData) => {
//   // const destination1 = useSelector(state => state.form.userInput.values);
//   const dispatch = useDispatch();
//   console.log(formData)
//   // dispatch(fetchDataLoading(true));

//   return ApiClient.getCityIdByName(formData).then(hotelList => {
//     //  dispatch(fetchDataLoading(false));
//     //  dispatch(fetchDataSuccess(hotelList));
//     console.log(hotelList)

  return HotelsAPI(formData).then(hotelList => {
    //  dispatch(fetchDataLoading(false));
    //  dispatch(fetchDataSuccess(hotelList));
    // console.log(hotelList)

// //     hotelsClosetoCC = hotelList.result.filter( el => el.min_total_price > 0)

    hotelsClosetoCC = hotelList.result.filter( el => el.min_total_price > 0)

    return hotelsClosetoCC
  });
// };
