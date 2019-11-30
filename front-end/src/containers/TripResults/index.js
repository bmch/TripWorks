<<<<<<< HEAD
=======

// import React from 'react';
// import {bindActionCreators} from 'redux';
// import { connect } from 'react-redux';
// import {fetchData, fetchDataFlights} from '../../actions';
// import { rootURL } from '../../constants';

>>>>>>> 7b6bc05f04dedb592c9c063cd9de244fba4f4252
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { fetchDataFlights } from "../../actions/flights";
// import { fetchHotelData } from "../../actions/hotels";
// import 'TripResults.css'

const TripResults = () => {  
<<<<<<< HEAD

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
=======
  const destination = useSelector(state => state.form.userInput.values); 
  console.log(destination);

    const hotelCity = useSelector(state => state.getCityId);

    const flights = useSelector(state => state.flights);
    const dispatch = useDispatch();


    useEffect( () => {
        dispatch(fetchDataFlights())
        dispatch(fetchHotelData())
      
	}, [])


  return (
    <div>
        <div>TEST</div>
        {/* <div>{ JSON.stringify(flights) }</div>    */}
        <div>{JSON.stringify(hotelCity)}</div>

import './TripResults.css';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchDataFlights } from '../../actions/flights';
import { fetchHotelData } from '../../actions/hotels';
// import hotels from './hotel.json';
​
const TripResults = () => {
  const destination = useSelector(state => state.form.userInput.values);
  const form = useSelector(state => state.form.userInput.values);
  const hotelAPIresults = useSelector(state => state.getCityId);
  //const hotelAPIresults = hotels;
  console.log(hotelAPIresults);
  // const LoadingStatus = useSelector(state => state. )
​
>>>>>>> 7b6bc05f04dedb592c9c063cd9de244fba4f4252
  return (
    <div>
      <div>
        {hotelAPIresults.result &&
          hotelAPIresults.result.map(hotel => (
            <div className="result" key={hotel.id}>
              <div className="img-div">
                <img src={hotel.main_photo_url} />
              </div>
​
              <div className="mid-div">
                <div className="hotel-name">Hotel Name: {hotel.hotel_name}</div>
                <div className="hotel-address">{hotel.address}</div>
              </div>
​
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
​
              <a href={hotel.url}>Click here to book</a>
            </div>
          ))}
      </div>
<<<<<<< HEAD
=======

>>>>>>> 7b6bc05f04dedb592c9c063cd9de244fba4f4252
    </div>
  );
};
​
export default TripResults;