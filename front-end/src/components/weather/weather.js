import React from 'react';
import { useSelector } from 'react-redux';
import WCont from './wCont'
import Forecast from './forecast';

function Weather() {

  const weather = useSelector(state => state.weather);
  const weatherTwo = useSelector(state => state.weatherTwo);
  // const weatherF = useSelector(state => state.weather.forecast);
  // const goDate = useSelector(state => state.form.userInput.values.goDate);
  // const backDate = useSelector(state => state.form.userInput.values.backDate)

  // const startDate = new Date(goDate)
  // const endDate = new Date(backDate)

  // const filtW = weather && weather.filter(function(w) {
  //   var date = new Date(w.valid_date);
  //   return (date >= startDate && date <= endDate);
  // });

  // const forecastComponent = filtW && filtW.map((e) => <Forecast e={e} />)

  // const forecastComponent = weatherF && weatherF.map((e) => <Forecast e={e} />)

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
        {/* {forecastComponent} */}
      </div>
      <WCont />
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