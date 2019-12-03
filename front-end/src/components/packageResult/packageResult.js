import React from 'react';
import './packageResult.css';
import 'typeface-roboto';
import WeatherContainer from '../weatherPage/weatherContainer'

const PackageResult = () => {
  
  
  return (
    <div className="wrapper">
      <div className="header">
        <h1>Barcelona</h1>
        <div className="weather">
          <WeatherContainer />
        </div>
      </div>
      <div className="resultBanner">
        <div className="price">
          <h2>$325</h2>
        </div>
        <div className="infoWrapper">
          <div className="cities">
          <div className="departure">
              <h4>Barcelona</h4>
            </div>
            <div className="destination">
              <h4>Madrid</h4>
            </div>
          </div>
          <div className="dates">
          <div className="go">
              <h4>April 12</h4>
            </div>
            <div className="back">
              <h4>April 14</h4>
            </div>
          </div>
        </div>
        
        {/* <div className="flightsInc">
          <h3>hotels included</h3>
        </div>
        <div className="addBtn">

        </div> */}        
        <div>
        </div>
      </div>
      <div className="resultBanner">
        <div className="price">
          <h2>$325</h2>
        </div>
        <div className="infoWrapper">
          <div className="cities">
          <div className="departure">
              <h4>Barcelona</h4>
            </div>
            <div className="destination">
              <h4>Madrid</h4>
            </div>
          </div>
          <div className="dates">
          <div className="go">
              <h4>April 12</h4>
            </div>
            <div className="back">
              <h4>April 14</h4>
            </div>
          </div>
        </div>
        
        {/* <div className="flightsInc">
          <h3>hotels included</h3>
        </div>
        <div className="addBtn">

        </div> */}        
        <div>
        </div>
      </div>
      <div className="resultBanner">
        <div className="price">
          <h2>$325</h2>
        </div>
        <div className="infoWrapper">
          <div className="cities">
          <div className="departure">
              <h4>Barcelona</h4>
            </div>
            <div className="destination">
              <h4>Madrid</h4>
            </div>
          </div>
          <div className="dates">
          <div className="go">
              <h4>April 12</h4>
            </div>
            <div className="back">
              <h4>April 14</h4>
            </div>
          </div>
        </div>
        
        {/* <div className="flightsInc">
          <h3>hotels included</h3>
        </div>
        <div className="addBtn">

        </div> */}        
        <div>
        </div>
      </div>
    </div>
  );
}

export default PackageResult;

