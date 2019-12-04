import React, { Component } from 'react';
// import Weather from './weather'
import Forecast from './forecast';
import { fetchDataWeather } from '../../actions/weather';
import { useSelector } from 'react-redux'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const WeatherContainer = () => {
  const classes = useStyles();

  const weather = useSelector(state => state.weather);

  const forecastComponentOne = weather && weather.map((e) => <Forecast e={e} />)

  return (
    <>
      <GridList className={classes.gridList} cols={1.5}>
        {forecastComponentOne}
      </GridList>
    </>
  );

}

export default WeatherContainer;









// return (
  //   weather.map((e) => <Forecast e={e} />)
  //   weatherTwo.map((e) => <ForecastTwo e={e} />)
  //   )




// console.log(goDate)
  // console.log(backDate)
  // console.log(goDate)
  // console.log("this should be an array of the weather forc", weather);
  // weather.forEach((e) => {
  //   console.log('is this happening?', e);
  // });


  // const filtW = weather && weather.filter(function(w) {
  //   var date = new Date(w.valid_date);
  //   return (date >= startDate && date <= endDate);
  // });



  // const forecastComponent = filtW && filtW.map((e) => <Forecast e={e} />)






 // const { goDate, backDate } = getState().form.userInput.values
  // const goDate = useSelector(state => state.form.userInput.values.goDate);
  // console.log("go date", goDate.values);
  // const backDate = useSelector(state => state.form.userInput.values.backDate);

  // const goDate= formValuesGo
  // const backDate= formValuesBack
  // console.log(goDate)
  // console.log(backDate)

  // const startDate = new Date(goDate)
  // const endDate = new Date(backDate)




// const forecastComponent = weather && weather.map((e) => {
//   for (let i = 0; i < weather.length; i++) {
//     if (date === weather[i].valid_date) {
//       for (let j = i; j < weather.length; j++) {
//         return <Forecast e={e} />
// }}}})

// const forecastComponent = weather && weather.map((e) => <Forecast e={e}/>)


// function mapDispatchToProps(dispatch) {
//   return {
//     fetchDataWeather: (city) => dispatch(fetchDataWeather(city))
//   }
// }

  // dispatch(fetchDataWeather())
  //  .then((res)=>console.log(res))
  // const forecast = useSelector(state => state.weather.forecast);

  // const { forecast } = getState().weather
  // console.log(forecast)