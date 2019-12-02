import React, { useEffect } from 'react';
import UserInput from './components/userInput/userInput';
import { useSelector } from "react-redux";
import TripResults from "./containers/TripResults/index";
import Result from "./components/result/result";
import SignIn from './components/singIn/singIn';
import PackageResult from './components/packageResult/packageResult'
import LandingPage from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/landingPage/landingPage.js';


const App = () => {

    return (
      <div>
      {/* <UserInput /> */}
      {/* <TripResults /> */}
      <PackageResult/>
      {/* <Result/> */}
      {/* <LandingPage /> */}
      </div>
    );
};

export default App;