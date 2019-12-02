import React from 'react';
import './result.css';
import AvgForecast from '../weather/avgForecast';

const Result = () => {
  
  
  return (
    <div className="wrapper">
      <div className="header">

      </div>
      <div className="resultBanner">
        <h2>Barcelona</h2>
        <AvgForecast />
      </div>
      <div className="resultBanner">
      <h2>Madrid</h2>
      </div>
      <div className="resultBanner">
      <h2>Paris</h2>
      </div>
    </div>
  );
}

export default Result;

