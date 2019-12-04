import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from 'react-router-dom';
import AddButton from './add-trip-button';
import apiClient from '../../services/user/apiClient';
import './result.css';

const Destination = ({ key, destination }) => {
  const endPoint =
    '/results/' + destination.city.toLowerCase().replace(' ', '-');
  const [buttonState, setButtonState] = useState('add');
  const formData = useSelector(state => state.formData);
  const add = () => {
    console.log('clicked');
    if (buttonState === 'add') {
      setButtonState('tick');
      const sending = { savedtrips: destination, dates: formData };
      console.log('this is being sent', sending);
      apiClient.postUserTrips(sending);
    } else setButtonState('add');
  };

  return (
    <div className="dest-container">
      <div className="dest-img">
        <img src={destination.photos.ldscSmall[0]} />
        <AddButton type={buttonState} add={add} />
      </div>
      <Link to={endPoint} >
        <div className="resultBanner">
          <h3 className="bottomPageInfo">{destination.city}</h3>
          <h3 className="bottomPageInfo"> <svg className="star" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>{destination.finalScore.toFixed(1)}/10</h3>
          <h3 className="bottomPageInfo">From €{destination.lowestCombinedPrice.toFixed(0)}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Destination;
