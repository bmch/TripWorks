import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Result from './components/result/result';
import PackageResult from './components/packageResult/packageResult';
import UserInput2 from './components/userInput3/UserInput2';
import SignIn from "./components/singIn/singIn";
import SignUp from "./components/singUp/singUp";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import apiClient from "./services/user/apiClient";
import UserProfile from "./components/userProfile/userProfile";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import Spinner from './components/spinner/index'
import WeatherContainer from './components/weatherPage/weatherContainer'
import LandingPage from './components/landingPage/landingPage';

const App = () => {
  const createUser = (inputs, history) => {
    apiClient.postUser(inputs)
    .then(data => {
      history.push('/home');

      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  };

  const logUserIn = (inputs, history) => {
  console.log("TCL: logUserIn -> inputs", inputs)
    
    apiClient.logUserIn(inputs)
      .then(data => {
        history.push("/home");

        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute  path="/home" component={UserInput2} />
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/profile" render={() => <UserProfile />} />
          <Route path="/login" render={() => <SignIn logUserIn={logUserIn} />} />
          <Route
            path="/register"
            render={() => <SignUp createUser={createUser} />}
          /> 
          <Route path="/loading" render={() => <Spinner />} />
          <Route path="/results" render={() => <Result />} exact />
          <Route path="/results/:city" render={() => <PackageResult />} />
          <Route path="/weather" render={() => <WeatherContainer />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;