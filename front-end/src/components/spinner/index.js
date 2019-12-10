import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import flightSpinner from '../../assets/gifs/flight-spinner-trimmed.gif'
import './spinner.css'
import { withThemeCreator } from '@material-ui/styles';
import { Line } from 'rc-progress'


const Spinner = () => {
  
  const dispatch = useDispatch()
  const history = useHistory()
  const progress = useSelector(state => state.loadingProgress)
  const formData = useSelector(state => state.formValues)
  const fetchStatus = useSelector(state => state.fetchingTrips)

  const [departure, setDeparture] = useState('empty')
  const [destination, setDestination] = useState('empty')
  const [prog2, setProg2] = useState(0)

  let message2;
  if(formData.destinations) {
    let message = ''
    formData.destinations.forEach(destination => {
      message = message + ' ' + destination + ','
    })
    message2 = message.slice(0, message.length-1).concat('...')
  }

  let modifier=1;
  if (formData.destinations) modifier = 40/formData.destinations.length
  const wait = async (ms) => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  useEffect( () => {
    if (fetchStatus === false) {
      history.push('./home')
      return null
    }
    if (departure === 'empty') { 
      console.log(formData)
      setDeparture(formData.depAirport)
      for (let i = 0; i < formData.destAirports.length; i++) {
        console.log('setting airports')
        wait(i * 8888 + 1).then(() => setDestination(formData.destAirports[i]))
      }
      wait(2000).then(() => setProg2(10))
        .then(() => wait(2000)).then(() => setProg2(20))
    }
  })
  

  return (
    <div className='spinner-page'>
      <div className='loading-message'>Searching for awesome trips to{message2}</div>
      <div className='spinner-cont'>
        <img className="plane" src={flightSpinner} />
        <div className="spinner-airports-cont">
          <div>{departure}</div><div>{destination}</div>
        </div>
      </div>
      <div className="loading-bar">
        <Line strokeWidth="3" percent={progress*modifier+prog2} />
      </div>
    </div>
  )
}

export default Spinner;