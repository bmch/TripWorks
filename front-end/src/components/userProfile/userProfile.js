import React , { Component } from 'react';
import './userProfile.css';

export default function UserProfile() {
    
    return (
      <div className="wrapper">
        <div className="avatar_wrapper">
        <svg className="backbtn" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>

          <div class="avatar">
            <img src="https://picsum.photos/id/1011/500/500" class="avatar__image"/>
            <h2>Regina Cooper</h2>
          </div>
        </div>
      
        <div className="trips">
          <h3>Trips</h3>
        </div>
      </div>
     
    );
  }

