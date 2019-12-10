import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './packageResult.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import data from '../result/tripList.json'
import { useParams } from "react-router-dom";
import WeatherContainer from '../weatherPage/weatherContainer'
import Background from './background'
import moment from 'moment'
import HotelsDisp from './hotelsDisp'
import FlightsDisp from './flightsDisp'

const PackageResult = () => {
  const [isFlightMode, setIsFlightMode] = useState(false)
  const [destination, setDestination] = useState('empty')
  const history = useHistory()

  const data = useSelector(state => state.tripResults);

  const { city } = useParams()
  console.log(city)

  let dest = data.find(destination => {
    return destination.city.toLowerCase().replace(' ', '-') === city
  })
  if (!dest) {
    history.push("/results")
    return null
  }

  const renderBannerFlights = () => {
    return (
      <div>
        { dest.flights.map((element, key) => {
          if (key >= 6) return true
          return <FlightsDisp i={key} dest={dest} />
          })
        }
      </div>
    )
  }

  const renderBannerHotels = () => {
    return (
      <div>
        { dest.hotels.map((element, key) => {
          if (key >= 6) return true
          return <HotelsDisp i={key} dest={dest} />
          })
        }
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
{dest.photos ? <Background data={dest.photos} /> : null }
        <h1>
{dest.city}</h1>
        <div className="weatherPR">
{dest.weather ? <WeatherContainer weather={dest.weather.weatherForecast}/> : null }
        </div>
      </div>
      <div className="button-cover">
        <input onClick={handleClick} type="checkbox" id="toggle" class="checkbox" />
        <label for="toggle" class="switch">
            <div class="on">Flights</div>
            <div class="off">Hotels</div>
        </label>
      </div>
      {isFlightMode ? renderBannerHotels() : renderBannerFlights()}
  </div>
  );
}

export default PackageResult;




