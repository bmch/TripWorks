import React, { useEffect } from 'react';
import UserInput from './components/userInput/userInput';
import { useSelector } from 'react-redux';
import TripResults from './containers/TripResults/index';
import Result from './components/result/result';
import SignIn from './components/singIn/singIn';
import PackageResult from './components/packageResult/packageResult';
import UserInput2 from './components/userInput2/UserInput2';

const App = () => {
  return (
    <div>
       <UserInput2 />
      {/* <UserInput /> */}
      {/* <TripResults /> */}
      <Result />
     
    </div>
  );
};

export default App;
