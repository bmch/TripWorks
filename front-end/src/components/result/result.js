import React from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import './result.css';
import Destination from './destination'
import data from './tripList.json'

const Result = () => {
  
  // const data = useSelector(state => state.tripResults); 
  // console.log(data)
  
  
  return (
    <div className="wrapper">
      {/* <div className="header"></div> */}

      { data ? data.map( (destination, key) => {
        return <Destination key2={key} destination={destination} />
        }
      ) : null }

    </div>
  );
}

export default Result;

