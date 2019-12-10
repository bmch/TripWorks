import React from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import './result.css';
import Destination from './destination'
import data from './tripList.json'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import PackageResult from '../packageResult/packageResult';

const Result = () => {
  
  const data = useSelector(state => state.tripResults); 
  
  return (
    <div className="wrapperResult">
      { data ? data.map( (destination, index) => 
        <Destination key={index} destination={destination} />
      ) : null }
    </div>
  );
}

export default Result;

