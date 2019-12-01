import React from 'react';
import { useSelector } from 'react-redux';
import Weather from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/weather/weather.js'
import Box from '@material-ui/core/Box';
import Moment from 'moment'
import 'typeface-roboto'


function ForecastTwo(props) {
  // const weather = useSelector(state => state.weather.forecast);
  // const weatherTwo = useSelector(state => state.weatherTwo.forcast);
  const icon = props.e.weather.icon
  return (

    <div className="testWeather">

      <div style={{ width: '100%', display: 'flex' }}>
        <Box component="div" style={{ display: "inline", backgroundColor: "white", fontFamily: 'typeface-roboto' }} p={1} m={1} boxShadow={3}>
          <p>{Moment(props.e.valid_date).format("MMM Do YYYY")}</p>
          <img src={`/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/weather/icons/${icon}.png`}/>
          <p>{Math.round(props.e.low_temp)}-{Math.round(props.e.high_temp)}</p>
          <p>{props.e.weather.description}</p>
        </Box>

      </div>
    </div>
  );
}



export default ForecastTwo;