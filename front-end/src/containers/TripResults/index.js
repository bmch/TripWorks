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
    </div>
  );
};

export default TripResults;