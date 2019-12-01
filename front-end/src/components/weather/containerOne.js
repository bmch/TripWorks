import React, { Component } from 'react';
// import Weather from './weather'
import ForecastOne from './forecast';
import ForecastTwo from './forecastTwo';
import { fetchDataWeather } from '../../actions/weather';
import { useSelector } from 'react-redux'
import Weather from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/weather/weather.js'
import Paper from "@material-ui/core/Paper";



const ContainerOne = () => {

  const weather = useSelector(state => state.weather);
  
  const forecastComponentOne = weather && weather.map((e) => <ForecastOne e={e} />)
  
  return (
    <>    
        {forecastComponentOne}        
    </>
  );

}

export default ContainerOne;

// return (
  //   weather.map((e) => <Forecast e={e} />)
  //   weatherTwo.map((e) => <ForecastTwo e={e} />)
  //   )




// console.log(goDate)
  // console.log(backDate)
  // console.log(goDate)
  // console.log("this should be an array of the weather forc", weather);
  // weather.forEach((e) => {
  //   console.log('is this happening?', e);
  // });
  

  // const filtW = weather && weather.filter(function(w) {
  //   var date = new Date(w.valid_date);
  //   return (date >= startDate && date <= endDate);
  // });

  
  
  // const forecastComponent = filtW && filtW.map((e) => <Forecast e={e} />)






 // const { goDate, backDate } = getState().form.userInput.values
  // const goDate = useSelector(state => state.form.userInput.values.goDate);
  // console.log("go date", goDate.values);
  // const backDate = useSelector(state => state.form.userInput.values.backDate);
  
  // const goDate= formValuesGo
  // const backDate= formValuesBack
  // console.log(goDate)
  // console.log(backDate)

  // const startDate = new Date(goDate)
  // const endDate = new Date(backDate)




// const forecastComponent = weather && weather.map((e) => {
//   for (let i = 0; i < weather.length; i++) {
//     if (date === weather[i].valid_date) {
//       for (let j = i; j < weather.length; j++) {
//         return <Forecast e={e} />
// }}}})

// const forecastComponent = weather && weather.map((e) => <Forecast e={e}/>)


// function mapDispatchToProps(dispatch) {
//   return {
//     fetchDataWeather: (city) => dispatch(fetchDataWeather(city))
//   }
// }

  // dispatch(fetchDataWeather())
  //  .then((res)=>console.log(res))
  // const forecast = useSelector(state => state.weather.forecast);

  // const { forecast } = getState().weather
  // console.log(forecast)