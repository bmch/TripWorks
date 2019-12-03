import React, { Component } from 'react';
import './landingPage.css';


function LandingPage(params) {

  return (
    <div>
      <div className='topSpacing'></div>
      <div className='imageContainer'>
        <img src={require('./logos/defaultP.png')} className='tripWorksLogo' />
      </div>
      <div className='bottomSpacing'></div>
      <div className='buttonContainer'>
        <button className='getStartedBtn'>LOGIN</button>
        <button className='getStartedBtn'>CREATE AN ACCOUNT</button>
      </div>
    </div>
  )
}

export default LandingPage;