import HotelsAPI from '../services/__mock__/ApiClient';
import { useSelector } from 'react-redux';



export const fetchHotelData = async (formData) => {
  // const destination1 = useSelector(state => state.form.userInput.values);

  console.log(formData)
  // dispatch(fetchDataLoading(true));

  let hotelList = await HotelsAPI(formData, 0)
    //  dispatch(fetchDataSuccess(hotelList));
    // console.log(hotelList)

  let hotelsFiltered = hotelList.result.filter( el => Number(el.distance_to_cc) < 5 && el.min_total_price > 0 && el.business_review_score > 7)
  console.log('filtered hotels', hotelsFiltered)
    // hotelsFiltered = hotelList.result.filter( el => el.min_total_price > 0)
  if (hotelsFiltered.length === 0) {
    let hotelList = await HotelsAPI(formData, 30)
    hotelsFiltered = hotelList.result.filter( el => Number(el.distance_to_cc) < 8 && el.min_total_price > 0 && el.business_review_score > 7)
    console.log('filtered hotels', hotelsFiltered)
  }
  return hotelsFiltered
};
