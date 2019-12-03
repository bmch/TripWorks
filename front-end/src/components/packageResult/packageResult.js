import React from 'react';
import './packageResult.css';

const PackageResult = () => {
  
  
  return (
    <div className="wrapperPR">
      <div className="headerPackageResult">
        <h1>Barcelona</h1>
        <div className="weatherPR">
          <h3>weather</h3>
        </div>
      </div>
      <div className="resultBannerPackageResult">
        <div className="sidebarPackagePR">
        <div className="planeIcon">
        <svg class="bk-icon -iconset-airplane" height="24" width="24" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M8.3 83.1l2.8-2.8a1 1 0 0 1 .7-.3h27.3l16-17.5-41.7-32a4 4 0 0 1-1.1-5.3l1.3-2.8a4 4 0 0 1 5.1-1.6l55.5 21.1L98 16a28.6 28.6 0 0 1 18-8 4 4 0 0 1 4 4 28.6 28.6 0 0 1-8 18L86.6 53.4l21 55.3a4 4 0 0 1-1.6 5.1l-2.7 1.4A4 4 0 0 1 98 114L66 72.3 48 89v27.3a1 1 0 0 1-.3.7l-2.8 2.8a1 1 0 0 1-1.6-.2L30.7 97.3 8.5 84.7a1 1 0 0 1-.2-1.6z"></path></svg>
        </div>
        <div className="price">
          <h2>$325</h2>
        </div>
        <div className="hotelIcon">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
        </div>
        </div>
        <div className="infoWrapperPR">
          <div className="airports">
            <div className="departureCity"> 
              DAC
            </div>
            <div className="destinationCity"> 
              CGK
            </div>
          </div>
          <div className="FlightTime">
            <div className="departureTime">
              <h3>12:50 PM</h3>
            </div>
            <div >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
            <div className="LandingTime">
            <h3>02:15 AM</h3>
            </div>
          </div>
          <div className="datesPR">
            <div className="goDate">
              June 12
            </div>
            <div className="backDate">
              June 14
            </div>
          </div>
          <div className="otherInfo">
            <div className="flightType">
              Round trip
            </div>
            <div className="flightDuration">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

              2h 25m
            </div>
          <div/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PackageResult;

