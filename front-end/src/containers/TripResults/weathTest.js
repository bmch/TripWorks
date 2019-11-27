import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataWeather } from "../../actions/weather";


const WeatherResults = () => {

  const city = 'Paris'
    const weather = useSelector(state => state.weather);
    const dispatch = useDispatch();


    useEffect( () => {
        console.log('action dispatched');
        dispatch(fetchDataWeather(city))
      
	})


  return (
    <div>
        <div>TEST</div>
        <div>{ weather }</div>   
    </div>
  );
};

export default WeatherResults;