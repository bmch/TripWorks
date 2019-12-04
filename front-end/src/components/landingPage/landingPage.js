import React, { Component } from 'react';
import './landingPage.css';


function LandingPage(params) {

  return (
    <div>
      <div className='topSpacing'></div>
      <div className='imageContainer'>
        <img src={require('./logos/black-default.png')} className='tripWorksLogo' />
      </div>
      <div className='bottomSpacing'></div>
      <div className='buttonContainer'>
        <button className='getStartedBtn'>LOG IN</button>
        <button className='getStartedBtn'>CREATE AN ACCOUNT</button>
      </div>
    </div>
  )
}

export default LandingPage;