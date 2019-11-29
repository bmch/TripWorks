<<<<<<< HEAD
// import React from 'react';
// import {bindActionCreators} from 'redux';
// import { connect } from 'react-redux';
// import {fetchData, fetchDataFlights} from '../../actions';
// import { rootURL } from '../../constants';

import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchDataFlights } from "../../actions/flights";
import { fetchHotelData } from "../../actions/hotels";


const TripResults = () => {  
<<<<<<< HEAD
  const destination = useSelector(state => state.form.userInput.values); 
  console.log(destination);

    const hotelCity = useSelector(state => state.getCityId);

=======
    const form = useSelector(state => state.form.userInput.values); 
    const hotels = useSelector(state => state.cityId);
>>>>>>> feat/flights2
    const flights = useSelector(state => state.flights);

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchDataFlights())
<<<<<<< HEAD
        dispatch(fetchHotelData())
      
	}, [])
=======
        // dispatch(fetchHotelData())
	} , [])
>>>>>>> feat/flights2


  return (
    <div>
<<<<<<< HEAD
        <div>TEST</div>
        {/* <div>{ JSON.stringify(flights) }</div>    */}
        <div>{JSON.stringify(hotelCity)}</div>
=======
        <div>Results</div>
        <div>{form}</div>
        <div>{ JSON.stringify(flights) }</div>   
        <div>{hotels}</div>
>>>>>>> feat/flights2
=======
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchDataFlights } from '../../actions/flights';
import { fetchHotelData } from '../../actions/hotels';
import './TripResults.css';
import hotels from './hotel.json';

const TripResults = () => {
  const destination = useSelector(state => state.form.userInput.values);
  const hotelAPIresults = useSelector(state => state.getCityId);
  // const hotelAPIresults = hotels;
  console.log(hotelAPIresults);

  // const LoadingStatus = useSelector(state => state. )
  const flights = useSelector(state => state.flights);
  const dispatch = useDispatch();

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
>>>>>>> feat/fetch-hotels
    </div>
  );
};

export default TripResults;