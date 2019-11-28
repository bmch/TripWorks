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
    </div>
  );
};

export default TripResults;