import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { fetchDataFlights } from "../../actions/flights";
// import { fetchHotelData } from "../../actions/hotels";
// import 'TripResults.css'

const TripResults = () => {  

  // const destination = useSelector(state => state.form.userInput.values); 
  // console.log(destination);
  const hotelAPIresults = useSelector(state => state.getCityId);
    // const form = useSelector(state => state.form.userInput.values); 
    //const hotels = useSelector(state => state.cityId);
    // const flights = useSelector(state => state.flights);
    // const dispatch = useDispatch();

  // console.log('hotel api results', hotelAPIresults);
  // if (!hotelAPIresults.length) {
  //   return <p> Loading......</p>;
  // }
  // const listHotels = hotelAPIresults.result.map(hotel => (
  //   <div key={hotel.id}>{hotel.address}</div>
  // ));
  return (
    <div>
      <div>
        {hotelAPIresults.result &&
          hotelAPIresults.result.map(hotel => (
            <div className="result" key={hotel.id}>
              {hotel.address}
              <div>Hotel Name: {hotel.hotel_name}</div>
              <div>
                {hotel.price_breakdown &&
                  'Price: $' + hotel.price_breakdown.gross_price}
              </div>
              <div>
                {hotel.facilities_review_score &&
                  'Facilities review score: ' +
                    hotel.facilities_review_score.rating}
              </div>
              <div className="image-div">
                <img src={hotel.main_photo_url} />
              </div>
              <a href={hotel.url}>Click here to book</a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TripResults;
