import React from 'react'
import moment from 'moment'

//"OutboundLegId":"9772-1912070755--32222-0-13554-1912070925",
//"InboundLegId":"13554-1912111550--32222-0-9772-1912111900",

const flightsDisp = ({i, dest}) => {

  let outDepTime = dest.flights[i].OutboundLegId.split('-')[1]
  let inDepTime = dest.flights[i].InboundLegId.split('-')[1]
  let outArrTime = dest.flights[i].OutboundLegId.split('-')[dest.flights[i].OutboundLegId.split('-').length-1]
  let inArrTime = dest.flights[i].InboundLegId.split('-')[dest.flights[i].InboundLegId.split('-').length-1]
  let a = outDepTime.slice(6, 8) + ':' + outDepTime.slice(8, 10)
  let b = outArrTime.slice(6, 8) + ':' + outArrTime.slice(8, 10)
  let c = inDepTime.slice(6, 8) + ':' + inDepTime.slice(8, 10)
  let d = inArrTime.slice(6, 8) + ':' + inArrTime.slice(8, 10)
  let t0 = null;
  if (outDepTime.slice(6, 8) !== outArrTime.slice(6, 8)) t0 = '+1' 

  return (
    <div className="resultBannerFlights">
        <div className="sidebarPackagePR">
        <div className="planeIcon">
        <svg class="bk-icon -iconset-airplane" height="24" width="24" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M8.3 83.1l2.8-2.8a1 1 0 0 1 .7-.3h27.3l16-17.5-41.7-32a4 4 0 0 1-1.1-5.3l1.3-2.8a4 4 0 0 1 5.1-1.6l55.5 21.1L98 16a28.6 28.6 0 0 1 18-8 4 4 0 0 1 4 4 28.6 28.6 0 0 1-8 18L86.6 53.4l21 55.3a4 4 0 0 1-1.6 5.1l-2.7 1.4A4 4 0 0 1 98 114L66 72.3 48 89v27.3a1 1 0 0 1-.3.7l-2.8 2.8a1 1 0 0 1-1.6-.2L30.7 97.3 8.5 84.7a1 1 0 0 1-.2-1.6z"></path></svg>
        </div>
        <div className="price">
          <h2>
€{dest.flights[i].cheapestPrice.toFixed(0)}</h2>
        </div>
        <div className="hotelIcon">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
        </div>
        </div>
        <div className="infoWrapperPR">
          <div className="airports">
            <div className="departureCity">
{dest.airports[0]}</div>
            <div className="destinationCity"> 
{dest.airports[1]}</div>
          </div>
          <div className="FlightTime">
            <div className="departureTime">
              <h3>
{a}</h3>
            </div>
            <div>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
            <div className="LandingTime">
              <h3>
{b}</h3>
            </div>
          </div>
          <div className="datesPR">
            <div className="goDate">
{moment(dest.dates[0]).format('MMM DD')}</div>
            <div className="backDate">
{moment(dest.dates[1]).format('MMM DD')}</div>
          </div>
          <div className="otherInfoflight">
            {/* <div className="flightType">
              Round trip
            </div> */}
            <div className="flightDuration">
              {/* <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> */}
{dest.flights[i].cheapestAgent.Name}
            </div>
            <div >
              <a href=
{dest.flights[i].PricingOptions[0].DeeplinkUrl}>
                <button className="booking-button">Book Now</button>
              </a>
            </div>
          <div/>
        </div>
      </div>
    </div>
  )
}

export default flightsDisp