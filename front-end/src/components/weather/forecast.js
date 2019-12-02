import React from 'react';
import { useSelector } from 'react-redux';
import Weather from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/weather/weather.js'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Moment from 'moment'
import 'typeface-roboto'
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

function Forecast(props) {

  // const weather = useSelector(state => state.weather.forecast);
  // const weatherTwo = useSelector(state => state.weatherTwo.forcast);
  const icon = props.e.weather.icon
  const classes = useStyles();
  return (
    <div>
      <GridListTile >
        <div style={{ width: '200px', display: 'flex' }}>
          {/* <Box component="div" style={{ display: "inline", backgroundColor: "white", fontFamily: 'Helvetica' }} p={5} m={5} boxShadow={3}> */}
          <img src={require(`./icons/${icon}.png`)} />
            <p>{Moment(props.e.valid_date).format("MMM Do")}</p><br/><br/>
            <p>{Math.round(props.e.low_temp)}°-{Math.round(props.e.high_temp)}°</p>
            
            
            {/* <p>{props.e.weather.description}</p> */}
          {/* </Box> */}
        </div>
      </GridListTile>
    </div>
  );
}



export default Forecast;


// return (
//   <div className={classes.root}>
//     <GridList className={classes.gridList} cols={2.5}>
//       {tileData.map(tile => (
//         <GridListTile key={tile.img}>
//           <img src={tile.img} alt={tile.title} />
//           <GridListTileBar
//             title={tile.title}
//             classes={{
//               root: classes.titleBar,
//               title: classes.title,
//             }}
//             actionIcon={
//               <IconButton aria-label={`star ${tile.title}`}>
//                 <StarBorderIcon className={classes.title} />
//               </IconButton>
//             }
//           />
//         </GridListTile>
//       ))}
//     </GridList>
//   </div>
// );









// <div style={{ width: '100%' }}>
{/* <Paper component="div" display="inline" p={1} m={1} bgcolor="background.paper">
        <h1>Forecast Destination 1</h1>
        <p>{props.e.valid_date}</p>
        <p>{props.e.weather.icon}</p>
        <p>{props.e.temp}</p>
        <p>{props.e.weather.description}</p>
      </Paper> */}
// </div>

{/* // <div className="testWeather">

    //   <div className="weatherOne">
    //     <h1>Forecast Destination 1</h1>
    //     <p>{props.e.valid_date}</p>
    //     <p>{props.e.weather.icon}</p>
    //     <p>{props.e.temp}</p>
    //     <p>{props.e.weather.description}</p>
    // </div>
    // </div> */}

// <div className="testWeather">
//       <div className="weatherOne">
//         <h1>Forecast Destination 1</h1>
//         {/* <p>{e.city}</p> */} */}
//         <p>{weather.e.date}</p>
//         <p>{weather.e.icon}</p>
//         <p>{weather.e.weather}</p>
//         <p>{weather.e.desc}</p>
//         {/* <p>{weather.data && weather.data.forcast[5].wind_cdir_full}</p>
//       </div>
//       {/* <div className="weatherTwo">
//         <h1>Forecast Destination 2</h1>
//         <p>{e.date}</p>
//         <p>{e.icon}</p>
//         <p>{e.weather}</p>
//         <p>{e.desc}</p>
//       </div> */}
//     </div>
//     </div>