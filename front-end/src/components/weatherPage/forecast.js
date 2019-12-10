import React from 'react';
import moment from 'moment'
import 'typeface-roboto'
import GridListTile from '@material-ui/core/GridListTile';


function Forecast(props) {

  const icon = props.e.weather.icon
  
  return (
    <div>
      <GridListTile >
        <div style={{ width: '170px', display: 'flex', flexDirection: 'row' }}>
          <div >
            <img src={require(`./icons/${icon}.png`)} style={{ height: '70px', width: '70px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', lineHeight: '80%' }}>
            <p>{moment(props.e.valid_date).format("MMM Do")}<br /><br />
              {Math.round(props.e.low_temp)}°-{Math.round(props.e.high_temp)}°</p>
          </div>
        </div>
      </GridListTile>
    </div>
  );
}

export default Forecast;