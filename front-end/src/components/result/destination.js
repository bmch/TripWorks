import React from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import './result.css';

const Destination = ( {key, destination}) => {
  
  
  
  return (
    <div>
      <img src={destination.photos.ldscSmall[0]}/>
      <div className="resultBanner">
        <h3>{destination.city}</h3>
        <img src={destination.hotels[0].main_photo_url} />
        <h3>Score: {destination.finalScore.toFixed(1)}/10</h3>
        <h3>Total Price: €{destination.lowestCombinedPrice}</h3>
      </div>
    </div>
  );
}

export default Destination;
