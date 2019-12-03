import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import AddButton from './add-trip-button'

import './result.css';

const Destination = ( {key, destination} ) => {

  const [buttonState, setButtonState] = useState("add");
  // const state = {
  //   display: "",
  //   buttonType: "add"
  // }

  const add = () => {
    console.log('clicked')
    if (buttonState === "add") {
      setButtonState("tick")
      // this.props.addToList(this.props.data.id)
    }
    else setButtonState("add")
  }
  
  return (
    <div className="dest-container">
      <div className="dest-img">
        <img className="dest-img" src={destination.photos.ldscFull[0]}/>
        <AddButton type={buttonState} add={add} />
      </div>
      <Link to='/PackageResult'>
        <div className="resultBanner">
          <h3>{destination.city}</h3>
          {/* <img src={destination.hotels[0].main_photo_url} /> */}
          <h3>Score: {destination.finalScore.toFixed(1)}/10</h3>
          <h3>Starting from €{destination.lowestCombinedPrice.toFixed(0)}</h3>
        </div>
      </Link>
    </div>
  );
}

export default Destination;
