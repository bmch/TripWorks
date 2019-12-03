import 'date-fns';
import React from 'react';
import { useDispatch } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DestAirportAutocomplete from './DestAirportAutocomplete';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import { addFormValues } from '../../actions/index';

import './UserInput2.css';

function UserInput2() {
  // The first commit of Material-UI
  const dispatch = useDispatch();
  const history = useHistory()

  const initialState = {
    goDate: new Date(),
    backDate: new Date(),
    departure: null
  };
  const [formData, setFormData] = React.useState(initialState);
  const [destList, setDestList] = React.useState([]);
  const [destInputs, setDestInputs] = React.useState([]);

  const handleChange = (type, input) => {
    setFormData({ ...formData, [type]: input });
  };
  const handleChangeOrigin = (input) => {
    setFormData( {...formData, departure: input });
  };
  const handleChangeDest = (input) => {
    setDestList( [...destList, input] );
  };
  const appendInput = () => {
    setDestInputs(prevState => prevState.concat(prevState.length + 2));
  };
 
  const isEnabled = formData.departure && destList.length > 0;
  const handleSubmit = e => {
    console.log('handle submit fired=============');
    console.log('form values', formData, destList);
    history.push("/loading")
    dispatch(addFormValues( {...formData, destList}, history));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="suggest">
        <DestAirportAutocomplete
          container justify="space-around"
          defaultValue = "Barcelona, Spain"
          label="From"
          name="departure"
          storeDestination={handleChangeOrigin}
        />
        <br></br>
        <DestAirportAutocomplete
          label="To"
          name="destination1"
          storeDestination={handleChangeDest}
        />
        {destInputs.map((num, index) => (
          <div key={index}>
            <br></br>
            <DestAirportAutocomplete
              label={`Destination Option ${num}`}
              name={`destination${num}`}
              storeDestination={handleChangeDest}
            />
          </div>
        ))}
        <span>Add another destination</span>
        <Fab color="primary" aria-label="add">
          <AddIcon onClick={() => appendInput()} />
        </Fab>
        <br></br>
        <br></br>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              variant="outlined" margin="normal" id="date-picker-dialog"
              label="Depart" format="dd/MM/yy"
              onChange={date => handleChange('goDate', date)}
              inputVariant="outlined" KeyboardButtonProps={ {'aria-label': 'change date'} }
              name="goData"value={formData.goDate}
            />
            <KeyboardDatePicker
              variant="outlined" margin="normal" id="date-picker-dialog"
              label="Return" format="dd/MM/yy" onChange={date => handleChange('backDate', date)}
              inputVariant="outlined" KeyboardButtonProps={ {'aria-label': 'change date'} }
              name="backDate" value={formData.backDate}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <br></br>
        <br></br>
        {/* {JSON.stringify(formData.backDate)} */}
        <br></br>
        <Button fullWidth variant="contained" onClick={handleSubmit} disabled={!isEnabled}
          color="primary" >Search</Button>
        <br></br>
      </div>
    </MuiPickersUtilsProvider>
  );
}
// const mapDispatchToProps = dispatch => {
//   return {
//     addFormValues: data => dispatch(addFormValues(data))
//   };
// };
// UserInput2 = connect(null, mapDispatchToProps)(UserInput2);

export default UserInput2;