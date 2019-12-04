import React, { Component } from 'react';
import './landingPage.css';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


function LandingPage(params) {

  return (
    <div landingWrapper>
      <div className='topSpacing'></div>
      <div className='imageContainer'>
        <img src={require('./logos/black-default.png')} className='tripWorksLogo' />
      </div>
      <div className='bottomSpacing'></div>
      <div className='buttonContainer'>
      <Link to="/login"><button className='getStartedBtn'>LOGIN</button>
      </Link> 
      <Link to="/register"> <button className='getStartedBtn'>CREATE AN ACCOUNT</button> </Link>
      </div>
    </div>
  )
}

export default LandingPage;