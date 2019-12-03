import React, { useEffect } from "react";
import UserInput2 from "./components/userInput2/UserInput2";
import { useSelector } from "react-redux";
import TripResults from "./containers/TripResults/index";
import Result from "./components/result/result";
import LogIn from "./components/singIn/singIn";
import PackageResult from "./components/packageResult/packageResult";
import SignUp from "./components/singUp/singUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import apiClient from "./services/user/apiClient";
import UserProfile from "./components/userProfile/userProfile";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const createUser = (inputs, history) => {
    apiClient.postUser(inputs)
    .then(data => {
      history.push('/');

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
        history.push("./");

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
          <PrivateRoute exact path="/" component={UserProfile} />
          <Route path="/login" render={() => <LogIn logUserIn={logUserIn} />} />
          <Route
            path="/register"
            render={() => <SignUp createUser={createUser} />}
          />
          <Route path='/home' render={() => <UserInput2 />} />
          <Route path="/results" render={() => <Result />} />
          <Route path="/PackageResult" render={() => <PackageResult />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
