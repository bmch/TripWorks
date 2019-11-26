// import React from 'react';
// import {bindActionCreators} from 'redux';
// import { connect } from 'react-redux';
// import {fetchData, fetchDataFlights} from '../../actions';
// import { rootURL } from '../../constants';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFlights } from "../../actions/flights";
import { fetchHotelData } from "../../actions/hotels";


const TripResults = () => {  
    const form = useSelector(state => state.form.userInput.values); 
    const hotels = useSelector(state => state.cityId);

    const flights = useSelector(state => state.flights);
    const dispatch = useDispatch();


    useEffect( () => {
        // console.log('action dispatched');
        dispatch(fetchDataFlights())
        dispatch(fetchHotelData())
      
	})


  return (
    <div>
        <div>TEST</div>
        {/* <div>{ JSON.stringify(flights) }</div>    */}
        <div>{hotels}</div>
    </div>
  );
};

export default TripResults;