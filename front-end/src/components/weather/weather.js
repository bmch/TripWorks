import React from 'react';
import { useSelector } from 'react-redux';
// import WCont from './wCont'

function Weather() {

  const weather = useSelector(state => state.weather);
  const weatherTwo = useSelector(state => state.weatherTwo);

  return (
    <div className="testWeather">
      <div className="weatherOne">
        <h1>Destination 1</h1>
        <p>{weather.city}</p>
        <p>{weather.date}</p>
        <p>{ weather.icon}</p>
        <p>{weather.weather}</p>
        <p>{weather.desc}</p>
        {/* <p>{weather.data && weather.data.forcast[5].wind_cdir_full}</p> */}
      </div>
      <div className="weatherTwo">
        <h1>Destination 2</h1>
        <p>{weatherTwo.city}</p>
        <p>{ weatherTwo.date}</p>
        <p>{ weatherTwo.icon}</p>
        <p>{ weatherTwo.weather}</p>
        <p>{ weatherTwo.desc}</p>
        {/* <p>{weatherTwo.data && weatherTwo.data.forcast[5].wind_cdir_full}</p> */}
      </div>
      {/* <WCont /> */}
    </div>
  );
}



export default Weather;

{/* <p>{weather.date && weather.date}</p> */}

// return (
//   <div className="testWeather">
//     <h1>theee weathaaahh</h1>
//     <p>{weather.city}</p>
//     <p>{weather.data && weather.data.valid_date}</p>
//     <p>{weather.data && weather.data[0].temp}</p>
//     <p>{weather.data && weather.data[0].temp}</p>

//     {/* <p>{goBack.values && goBack.values.goDate}</p>
//     <p>{goBack.values && goBack.values.backDate}</p> */}
//   </div>