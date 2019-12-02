import React from 'react';
import './result.css';
import { BrowserRouter as Router, Link, Redirect, useHistory } from 'react-router-dom';


const Result = () => {
  
 
  
  return (
    <div className="wrapper">
      <div className="header">

      </div>
    <Link to='/PackageResult'>
      <div className="resultBanner">
        <h2>Barcelona</h2>
      </div>
    </Link>
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

