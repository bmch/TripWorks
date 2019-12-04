import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Result from './components/result/result';
import SignIn from './components/singIn/singIn';
import PackageResult from './components/packageResult/packageResult';
import UserInput2 from './components/userInput2/UserInput2';
import LandingPage from './components/landingPage/landingPage'
import LogIn from "./components/singIn/singIn";
import SignUp from "./components/singUp/singUp";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import apiClient from "./services/user/apiClient";
import UserProfile from "./components/userProfile/userProfile";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import Spinner from './components/spinner/index'
import WeatherContainer from './components/weatherPage/weatherContainer'

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
    apiClient
      .logUserIn(inputs)
      .then(data => {
        history.push("./home");

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
          <Route exact path="/" render={() => <LandingPage />} exact />
          <Route exact path="/home" render={() => <UserInput2 />} />
          <Route path="/login" render={() => <LogIn logUserIn={logUserIn} />} />
          <Route path="/register" render={() => <SignUp createUser={createUser} />} />
          <Route path='/' render={() => <UserInput2 />} exact />
          <Route path="/loading" render={() => <Spinner />} />
          <Route path="/results" render={() => <Result />} exact />
          <Route path="/results/:city" render={() => <PackageResult />} />
          <Route path="/weather" render={() => <WeatherContainer />} />
          <Route path='/profile' render={() => <UserProfile /> } exact />
        </Switch>
      </div>
    </Router>
  );
};

export default App;