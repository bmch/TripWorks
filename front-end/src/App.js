import React, { useEffect } from 'react';
import UserInput from './components/userInput/userInput';
import { useSelector } from "react-redux";
import TripResults from "./containers/TripResults/index";


const App = () => {

    return (
      <div>
      <UserInput />
      <TripResults />
      </div>
    );
};

export default App;