import React , { Component } from 'react';
import './userProfile.css';

export default function UserProfile() {
    
    return (
      <div className="wrapperProfile">
        <div className="avatar_wrapper">
          <div class="avatar">
            <img src="https://picsum.photos/id/1011/500/500" class="avatar__image"/>
            <h2>Regina Cooper</h2>
          </div>
        </div>
      
        <div className="trips">
          <div className="trip-container">
            <div className="dest-trip-img">
              <img></img>
            </div>
          </div>
          <div className="trip-resultBanner">
            <h3 className="bottomPageInfo">city</h3>
            <h3 className="bottomPageInfo">ratings</h3>
            <h3 className="trip-bottomPage">price</h3>
          </div>
        </div>
      </div>
     
    );
  }

