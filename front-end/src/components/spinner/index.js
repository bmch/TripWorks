import React from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';

const Spinner = () => {

  const history = useHistory();
  
  // const fetchingStatus = useSelector(state => state.fetchingTrips); 
  // // console.log(data)

  // if (fetchingStatus === false) history.push("/results")
  
  // https://giphy.com/gifs/omio-brand-loop-plane-omio-PkLrYFJT9KVwkkvpjO/fullscreen

  return (
    <div>
        <div>SPINNER</div>
      <img src='https://media.giphy.com/media/PkLrYFJT9KVwkkvpjO/giphy.gif' />
    </div>
  )
}

export default Spinner;