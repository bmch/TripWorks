import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Moment from 'moment'

const AvgForecastOne = () => {

  const weather = useSelector(state => state.weather);

  const tempu = weather && weather.filter(day => day.temp)

  // console.log(tempu)
  
    let total = 0
    let av
    for (let i = 0; i < tempu.length; i++) {
      total += tempu[i].temp;  
    }
    
//     let maxEl = tempu[0].weather.icon

//     function iconz(){
//     if(tempu.length == 0)
//         return null;
//     let iconMap = {};
//     let maxCount = 1;
//     for(let i = 0; i < tempu.length; i++){
//         let el = tempu[i].weather.icon;
//         if(iconMap[el] == null)
//             iconMap[el] = 1;
//         else
//             iconMap[el]++;  
//         if(iconMap[el] > maxCount){
//             maxEl = el;
//             maxCount = iconMap[el];
//         }
//     }
//     return maxEl;
// }
    // const iconz = tempu.sort((a,b) =>
    //         tempu.filter(v => v===a).length
    //       - tempu.filter(v => v===b).length
    //   ).pop();
  
  // console.log(maxEl)

  return (

    <div style={{ width: '100%', display: 'flex' }}>
      <Box component="div" style={{ display: "inline", backgroundColor: "white", fontFamily: 'typeface-roboto' }} p={1} m={1} boxShadow={3}>
        <h4>Averages</h4>

        {/* <div>{tempu[0].weather.icon}</div> */}
        <p>{Math.round(total/tempu.length)}</p>
      </Box>
    </div>
  )
}

export default AvgForecastOne;