import React from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import './result.css';
import Destination from './destination'
import data from './tripList.json'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';

const Result = () => {
  
  // const data = useSelector(state => state.tripResults); 
  // console.log(data)
  
  
  return (
      <div className="wrapperResult">
        { data ? data.map( (destination, key) => 
          <Destination key2={key} destination={destination} />
        ) : null }
      </div>
  );
}

export default Result;

