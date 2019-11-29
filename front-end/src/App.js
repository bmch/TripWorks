import React, { Component, useState } from 'react';
import Weather from './components/weather/weather';
import UserInput from './components/userInput/userInput';
import TripResults from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/containers/TripResults/index.js'
import WeatherResults from './containers/TripResults/weathTest';


function App() {
  // const [flag, setFlag] = useState(false);

  // const flurg = () => {
  //   if (flag === true) {

  //   }
  // }

  return (
    <div>
      {/* <WeatherResults /> */}
      {/* <TripResults /> */}
      <UserInput />
      
      {/* <Weather /> */}
    </div>
  );

}

export default App;