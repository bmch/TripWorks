import React from 'react'
import moment from 'moment'

let baseUrl = 'http://www.google.com/maps/place/'

const hotelsDisp = ({i, dest}) => {

  return(
    <div className="resultBannerHotels">
        <div className="sidebarHotels">
        <div className="hotelIcon"> 
        <svg class="bk-icon -experiments-building_house" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M19.905,3.607a.5.5,0,0,0-.81,0l-3,4.132a.492.492,0,0,0-.1.293V20.5a.5.5,0,0,0,.5.5h6a.5.5,0,0,0,.5-.5V8.032a.5.5,0,0,0-.095-.293ZM18.5,17.5a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm0-4a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm0-4a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm3,8a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm0-4a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Zm0-4a.5.5,0,0,1-1,0v-1a.5.5,0,0,1,1,0Z"></path><path d="M14.5,7.5h-7A.5.5,0,0,0,7,8v5.5a.5.5,0,0,0,.5.5h3a1.5,1.5,0,0,1,1.2.6l2.85,3.8a.25.25,0,0,0,.45-.15V8A.5.5,0,0,0,14.5,7.5Z"></path><path d="M10.889,18.351a.5.5,0,0,0-.8,0L8.2,20.805a.5.5,0,0,1-.4.2H1.5a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5V21.333a.5.5,0,0,0-.1-.3Z"></path><path d="M10.9,15.2a.534.534,0,0,0-.4-.2h-7a.5.5,0,0,0-.4.2l-3,4a.5.5,0,0,0,.4.8h7a.5.5,0,0,0,.4-.2l2.2-2.934a.5.5,0,0,1,.8,0L13.1,19.8a.5.5,0,1,0,.8-.6Z"></path><path d="M23.9,5.706l-4-5.5A.515.515,0,0,0,19.5,0H10.737a1,1,0,0,0-.774.367l-3.682,4.5A1,1,0,0,0,7.055,6.5h8.19a1,1,0,0,0,.809-.412L19.1,1.906a.5.5,0,0,1,.808,0L23.1,6.294a.5.5,0,0,0,.808-.588Z"></path></svg>
        </div>
        <div className="price">
<h2>€{dest.hotels[i].price_breakdown.gross_price * dest.exchangeRate}</h2>
        </div>
        <div className="hotelIcon">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
        </div>
        </div>
        <div className="infoWrapperHotel">
          <div className="hotelName">
            <div className="departureCity"> 
{dest.hotels[i].hotel_name_trans}</div>
            <h3 className="stars">
{dest.hotels[i].class}
              <svg className="star" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </h3>
          </div>
          <div className="hotelDates">
            <div className="bookingDate">
              <h3>
{moment(dest.dates[0]).format('MMM DD')}</h3>
            </div>
            <div >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
            <div className="departDate">
              <h3>
{moment(dest.dates[1]).format('MMM DD')}</h3>
            </div>
          </div>
           <div className="hotelRating">
{dest.hotels[i].business_review_score}/10</div>
          <div className="otherInfohotel">
            <div className="direction-book">
              <div>
                <a href=
{baseUrl + dest.hotels[i].latitude + ',' + dest.hotels[0].longitude}>
                  <button className="hotelDirection">Directions</button>
                </a>
              </div>
              <div>
              <a href=
{dest.hotels[i].url}>
                <button className="booking-button">Book</button>
              </a>
              </div>
            </div> 
          <div/>
        </div>
      </div>
    </div>
  )
}

export default hotelsDisp