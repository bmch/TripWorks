import React from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import './result.css';

const Destination = ( {key, destination}) => {
  
  
  
  return (
      <div className="resultBanner">
        <h2>{destination.city}</h2>
        <img src={destination.main_photo_url} />
        <h2>Score: {destination.finalScore.toFixed(1)}/10</h2>
        <h2>Total Price: €{destination.lowestCombinedPrice}</h2>
      </div>
  );
}

export default Destination;
