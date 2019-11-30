import React from 'react';
import { useSelector } from 'react-redux';
import Weather from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/weather/weather.js'
import Box from '@material-ui/core/Box';
import Moment from 'moment'
import 'typeface-roboto'

function Forecast(props) {
  // const weather = useSelector(state => state.weather.forecast);
  // const weatherTwo = useSelector(state => state.weatherTwo.forcast);

  return (

    <div style={{ width: '100%', display: 'flex' }}>
      <Box component="div" style={{display: "inline", backgroundColor: "white", fontFamily: 'typeface-roboto'}} p={1} m={1} boxShadow={3}>
      <p>{Moment(props.e.valid_date).format("MMM Do YYYY")}</p>
        <p>{props.e.weather.icon}</p>
        <p>{props.e.temp}</p>
        <p>{props.e.weather.description}</p>
      </Box>
    </div>

  );
}



export default Forecast;


// <div style={{ width: '100%' }}>
{/* <Paper component="div" display="inline" p={1} m={1} bgcolor="background.paper">
        <h1>Forecast Destination 1</h1>
        <p>{props.e.valid_date}</p>
        <p>{props.e.weather.icon}</p>
        <p>{props.e.temp}</p>
        <p>{props.e.weather.description}</p>
      </Paper> */}
// </div>

{/* // <div className="testWeather">

    //   <div className="weatherOne">
    //     <h1>Forecast Destination 1</h1>
    //     <p>{props.e.valid_date}</p>
    //     <p>{props.e.weather.icon}</p>
    //     <p>{props.e.temp}</p>
    //     <p>{props.e.weather.description}</p>
    // </div>
    // </div> */}

// <div className="testWeather">
//       <div className="weatherOne">
//         <h1>Forecast Destination 1</h1>
//         {/* <p>{e.city}</p> */} */}
//         <p>{weather.e.date}</p>
//         <p>{weather.e.icon}</p>
//         <p>{weather.e.weather}</p>
//         <p>{weather.e.desc}</p>
//         {/* <p>{weather.data && weather.data.forcast[5].wind_cdir_full}</p>
//       </div>
//       {/* <div className="weatherTwo">
//         <h1>Forecast Destination 2</h1>
//         <p>{e.date}</p>
//         <p>{e.icon}</p>
//         <p>{e.weather}</p>
//         <p>{e.desc}</p>
//       </div> */}
//     </div>
//     </div>