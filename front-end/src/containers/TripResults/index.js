import './TripResults.css';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchDataFlights } from '../../actions/flights';
import { fetchHotelData } from '../../actions/hotels';
import { fetchPhotos } from '../../actions/photos';

import hotels from './hotel.json';
import photoJSON from './photos.json';

const TripResults = () => {
  const form = useSelector(state => state.form.userInput.values);
  const photos = useSelector(state => state.photos);

  // const hotelAPIresults = useSelector(state => state.getCityId);
  const hotelAPIresults = hotels;
  // console.log(hotelAPIresults);
  // const LoadingStatus = useSelector(state => state. )

  // const photos = photoJSON;

  console.log('photos', photos);

  return (
    <div>
      {/* <div>
        {hotelAPIresults.result &&
          hotelAPIresults.result.map(hotel => (
            <div className="result" key={hotel.id}>
              <div className="img-div">
                <img src={hotel.main_photo_url} />
              </div>

              <div className="mid-div">
                <div className="hotel-name">Hotel Name: {hotel.hotel_name}</div>
                <div className="hotel-address">{hotel.address}</div>
              </div>

              <div className="price-div">
                <div>
                  {hotel.price_breakdown &&
                    'Price: $' + hotel.price_breakdown.gross_price}
                </div>
                <div>
                  {hotel.facilities_review_score &&
                    'Facilities review score: ' +
                      hotel.facilities_review_score.rating}
                </div>
              </div>

              <a href={hotel.url}>Click here to book</a>
            </div>
          ))}
      </div> */}
      <div>
        {photos.results &&
          photos.results.map(img => (
            <div
              className="destination-photo"
              // style={{ backgroundImage: 'url(' + img.urls.regular + ')' }}
            >
              <img src={img.urls.regular} alt="" />

              <div className="bottom-left">{form && form.destination1}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TripResults;
