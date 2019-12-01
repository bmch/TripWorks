import React, { Component } from 'react';
// import Weather from './weather'
import Forecast from './forecast';
import ForecastTwo from './forecastTwo';
import { fetchDataWeather } from '../../actions/weather';
import { useSelector } from 'react-redux'
import Weather from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/weather/weather.js'
import Paper from "@material-ui/core/Paper";



const ContainerTwo = () => {

  const weatherTwo = useSelector(state => state.weatherTwo);
 
  const forecastComponentTwo = weatherTwo && weatherTwo.map((e) => <ForecastTwo e={e}/>)
  
  return (
    <>          
        {forecastComponentTwo}  
    </>
  );
}

export default ContainerTwo;

// return (
  //   weather.map((e) => <Forecast e={e} />)
  //   weatherTwo.map((e) => <ForecastTwo e={e} />)
  //   )