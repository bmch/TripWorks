import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';

const Background = ( {data} ) => {

  console.log(data)

  return (
  <div className="trip-img">
    { data ? <img className="background-img" src={data.ldscSmall[0]} /> : null }
  </div>)
}

export default Background;