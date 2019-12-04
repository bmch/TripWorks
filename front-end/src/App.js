import React, { useEffect } from 'react';
import UserInput from './components/userInput/userInput';
import { useSelector } from 'react-redux';
import TripResults from './containers/TripResults/index';
import Result from './components/result/result';
import SignIn from './components/singIn/singIn';
import PackageResult from './components/packageResult/packageResult';
import UserInput2 from './components/userInput2/UserInput2';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import WeatherContainer from './components/weatherPage/forecast'
import LandingPage from './components/landingPage/landingPage'


const App = () => {
  return (
    <Router>
      <div>
        {/* <LandingPage /> */}
        <UserInput2 />
        {/* <PackageResult/> */}
      </div>
    </Router>
  );
};

export default App;

{/* <Switch> */}
          {/* <PrivateRoute exact path="/" component={UserInput} exact />
          <Route path="/login" render={() => <LogIn logUserIn={logUserIn} />} />
          <Route
            path="/register"
            render={() => <SignUp createUser={createUser} />}
          /> */}
          {/* <Route path='/' render={() => <UserInput2 />} exact />
          <Route path="/results" render={() => <Result />} />
          <Route path="/PackageResult" render={() => <PackageResult />} /> */}
          {/* TODO:add the city id in-between results and packageresults */}
          {/* <TripResults /> */}
          {/* </Switch> */}