import React, {useState} from 'react';
import './packageResult.css';
// import WeatherContainer from '../weatherPage/weatherContainer';

const PackageResult = () => {
  const [isFlightMode, setIsFlightMode] = useState(false)

  const renderBannerFlights = () => {
    return (
     <div className="resultBannerFlights">
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
          <div className="otherInfoflight">
            <div className="flightType">
              Round trip
            </div>
            <div className="flightDuration">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

              2h 25m
            </div>
            <div >
              <button className="booking-button">Book</button>
            </div>
          <div/>
        </div>
      </div>
    </div>
    )
  }

  const renderBannerHotels = () => {
    return (
       <div className="resultBannerHotels">
        <div className="sidebarHotels">
        <div className="hotelIcon"> 
        <svg class="bk-icon -experiments-building_house" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M19.905,3.607a.5.5,0,0,0-.81,0l-3,4.132a.492.492,0,0,0-.1.293V20.5a.5.5,0,0,0,.5.5h6a.5.5,0,0,0,.5-.5V8.032a.5.5,0,0,0-.095-.293ZM18.5,17.5a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm0-4a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm0-4a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm3,8a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm0-4a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm0-4a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Z"></path><path d="M14.5,7.5h-7A.5.5,0,0,0,7,8v5.5a.5.5,0,0,0,.5.5h3a1.5,1.5,0,0,1,1.2.6l2.85,3.8a.25.25,0,0,0,.45-.15V8A.5.5,0,0,0,14.5,7.5Z"></path><path d="M10.889,18.351a.5.5,0,0,0-.8,0L8.2,20.805a.5.5,0,0,1-.4.2H1.5a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V21.333a.5.5,0,0,0-.1-.3Z"></path><path d="M10.9,15.2a.534.534,0,0,0-.4-.2h-7a.5.5,0,0,0-.4.2l-3,4a.5.5,0,0,0,.4.8h7a.5.5,0,0,0,.4-.2l2.2-2.934a.5.5,0,0,1,.8,0L13.1,19.8a.5.5,0,1,0,.8-.6Z"></path><path d="M23.9,5.706l-4-5.5A.515.515,0,0,0,19.5,0H10.737a1,1,0,0,0-.774.367l-3.682,4.5A1,1,0,0,0,7.055,6.5h8.19a1,1,0,0,0,.809-.412L19.1,1.906a.5.5,0,0,1,.808,0L23.1,6.294a.5.5,0,0,0,.808-.588Z"></path></svg>
        </div>
        <div className="price">
          <h2>$325</h2>
        </div>
        <div className="hotelIcon">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
        </div>
        </div>
        <div className="infoWrapperHotel">
          <div className="hotelName">
            <div className="departureCity"> 
              Hotel Name 
            </div>
            <div className="stars">
              Hotel stars
            </div>
          </div>
          <div className="hotelDates">
            <div className="bookingDate">
              <h3>DEC4</h3>
            </div>
            <div >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
            <div className="departDate">
              <h3>DEC6</h3>
            </div>
          </div>
           <div className="hotelRating">
              Hotel Rating
            </div>
          <div className="otherInfohotel">
            <div className="direction-book">
              <div>
                <button className="hotelDirection">Directions</button>
              </div>
              <div >
                <button className="booking-button">Book</button>
              </div>
            </div> 
          <div/>
        </div>
      </div>
      </div>
    )
  }
  
  const handleClick = () => {
    if (isFlightMode === false) {
      setIsFlightMode(true)
    } else {
      setIsFlightMode(false);
    }
  }

  return (
    <div className="wrapperPR">
      <div className="headerPackageResult">
        <h1>Barcelona</h1>
        <div className="weatherPR">
          {/* <WeatherContainer/> */}
        </div>
      </div>
      <div className="button-cover">
        <input onClick={handleClick} type="checkbox" id="toggle" class="checkbox" />
        <label for="toggle" class="switch">
          {/* <div class="slider round"> */}
            <div class="on">Flights</div>
            <div class="off">Hotels</div>
        </label>
      </div>
      {isFlightMode ? renderBannerHotels() : renderBannerFlights()}
  </div>
  );
}

export default PackageResult;




