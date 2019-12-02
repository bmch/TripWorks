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
        <img src={destination.photos.ldscSmall[0]}/>
        <AddButton type={buttonState} add={add} />
      </div>
      <div className="resultBanner">
        <Link to='/PackageResult'>
          <h3>{destination.city}</h3>
        </Link>
        {/* <img src={destination.hotels[0].main_photo_url} /> */}
        <h3>Score: {destination.finalScore.toFixed(1)}/10</h3>
        <h3>Total Price: €{destination.lowestCombinedPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Destination;
