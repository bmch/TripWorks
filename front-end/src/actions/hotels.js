import HotelsAPI from '../services/__mock__/ApiClient';
import { useSelector } from 'react-redux';

export const fetchHotelData = async (formData, dispatch) => {

  console.log(formData)

  let hotelList = await HotelsAPI(formData, 0)

  let hotelsFiltered = hotelList.result.filter( el => Number(el.distance_to_cc) < 5 && el.min_total_price > 0 && el.business_review_score > 7)
  console.log('filtered hotels', hotelsFiltered)

  if (hotelsFiltered.length === 0) {
    let hotelList = await HotelsAPI(formData, 30)
    hotelsFiltered = hotelList.result.filter( el => Number(el.distance_to_cc) < 8 && el.min_total_price > 0 && el.business_review_score > 7)
    console.log('filtered hotels', hotelsFiltered)
  }
  dispatch({
    type: 'LOG_PROGRESS',
    status: 1,
  })
  return hotelsFiltered
};
