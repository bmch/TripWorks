import React, { Component } from 'react';
import '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/landingPage/landingPage.css';

function LandingPage(params) {

  return (
    <div>
      <div className='topSpacing'></div>
      <div className='imageContainer'>
        <img src={require('./logos/default.png')} className='tripWorksLogo' />
      </div>
      <div className='bottomSpacing'></div>
      <div className='buttonContainer'>
        <button className='getStartedBtn'>GET STARTED</button>
      </div>
    </div>
  )
}

export default LandingPage;