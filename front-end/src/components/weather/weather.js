import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Weather () {


  const weather = useSelector(state => state.weather);
  const goBack = useSelector(state => state.form.userInput);

  // useEffect (() => {
  //   return weather.data
  // })

  
  
  
  // console.log(gooDate.values)
  // const backDate = useSelector(state => state.form.userInput.values);
  
  // const weatherData = useSelector(state => state.weather.data[0]);
  const dispatch = useDispatch();
  
  // for (let i = 0; i < weather.data.length; i++) {
  //   if (weather.data[i].valid_date === goBack.values.backDate) {


  /////erin---- figure out how to display this correctly from the store
  ////// make sure your actions are
    return (
      <div className="testWeather">
        <h1>theee weathaaahh</h1>
        <p>{weather.city}</p>
        <p>{weather.date && weather.date}</p>
        <p>{weather.icon && weather.icon}</p>
        <p>{weather.weather && weather.weather}</p>
        <p>{weather.desc && weather.desc}</p>
        <p>{weather.data && weather.data.forcast[5].wind_cdir_full}</p>
        
        {/* <p>{goBack.values && goBack.values.goDate}</p>
        <p>{goBack.values && goBack.values.backDate}</p> */}
      </div>
    );
  }
// }


export default Weather;

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