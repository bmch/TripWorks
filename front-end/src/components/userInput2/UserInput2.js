import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DestAirportAutocomplete from './DestAirportAutocomplete';
import AddIcon from '@material-ui/icons/Add';

import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { addFormValues } from '../../actions/addFormValues';

import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';

import './UserInput2.css';

function UserInput2({ addFormValues }) {
  // The first commit of Material-UI
  const history = useHistory()

  const initialState = {
    goDate: new Date(),
    backDate: new Date(),
    departure: null,
    destination1: null
  };

  const initDest = [];

  const [formData, setFormData] = React.useState(initialState);
  const [destInputs, setDestInputs] = React.useState(initDest);

  const handleChange = (name, date) => {
    console.log('the date being changed', date);
    console.log('the name of the value to change', name);
    setFormData({
      ...formData,
      [name]: date
    });
  };

  const appendInput = () => {
    setDestInputs(prevState => {
      return prevState.concat(prevState.length + 2);
    });
  };

  const handleSubmit = e => {
    // e.preventDefault();
    console.log('handle submit fired');
    console.log('form values', formData);
    addFormValues(formData);

    history.push("/results")

    // setFormData(initialState);
    // setDestInputs(initDest);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="suggest">
        <DestAirportAutocomplete
          label="From"
          name="departure"
          storeDestination={handleChange}
        />
        <br></br>
        <DestAirportAutocomplete
          label="To"
          name="destination1"
          storeDestination={handleChange}
        />
        {destInputs.map((num, index) => (
          <div key={index}>
            <br></br>
            <DestAirportAutocomplete
              label={`Destination Option ${num}`}
              name={`destination${num}`}
              storeDestination={handleChange}
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
              variant="outlined"
              margin="normal"
              id="date-picker-dialog"
              label="Depart"
              format="MM/dd/yyyy"
              onChange={date => handleChange('goDate', date)}
              inputVariant="outlined"
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              name="goData"
              value={formData.goDate}
            />

            <KeyboardDatePicker
              variant="outlined"
              margin="normal"
              id="date-picker-dialog"
              label="Return"
              format="MM/dd/yyyy"
              onChange={date => handleChange('backDate', date)}
              inputVariant="outlined"
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              name="backDate"
              value={formData.backDate}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <br></br>
        <br></br>
        {/* {JSON.stringify(formData.backDate)} */}
        <br></br>
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          color="primary"
        >
          Search
        </Button>
        <br></br>
      </div>
    </MuiPickersUtilsProvider>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addFormValues: data => dispatch(addFormValues(data))
  };
};
UserInput2 = connect(null, mapDispatchToProps)(UserInput2);

export default UserInput2;
