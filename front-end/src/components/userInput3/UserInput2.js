import 'date-fns';
import React from 'react';
import { useDispatch } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DestAirportAutocomplete from './DestAirportAutocomplete';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as useHistory } from 'react-router-dom';
import { addFormValues } from '../../actions/index';
import Drawer from './drawer'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import { makeStyles } from '@material-ui/core/styles';


import './UserInput2.css';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#282829',
    '&$focused': {
      background: '#212121'
    },
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(40, 40, 41 .3)',
  },

  focused: {
    background: '#282829'
  },
  focused: {},
}));

function UserInput() {

  const classes = useStyles();
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
    setFormData({ ...formData, departure: input });
  };
  const handleChangeDest = (input) => {
    setDestList([...destList, input]);
  };
  const appendInput = () => {
    setDestInputs(prevState => prevState.concat(prevState.length + 2));
  };

  const isEnabled = formData.departure && destList.length > 0;
  const handleSubmit = e => {
    console.log('handle submit fired=============');
    console.log('form values', formData, destList);
    history.push("/loading")
    dispatch(addFormValues({ ...formData, destList }, history));
  };

  return (
    <div className="userinputDiv" autoFocus={false}>
      <Drawer />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="suggest">
        <div className='spacing-top'></div>
          <Grid container spacing={1} >
            <Grid item xs={1}>
              <FlightTakeoffIcon className="inline-icon" />
            </Grid>
            <Grid item xs={11}>
              <DestAirportAutocomplete
                container justify="space-around"
                defaultValue="Barcelona, Spain"
                label="From"
                name="departure"
                storeDestination={handleChangeOrigin}
              />
            </Grid>
            <br></br>
            <Grid item xs={1}>
              <FlightLandIcon className="inline-icon" />
            </Grid>
            <Grid item xs={11}>
              <DestAirportAutocomplete
                label="To"
                name="destination1"
                storeDestination={handleChangeDest}
              />
            </Grid>
          </Grid>

          {destInputs.map((num, index) => (
            <div key={index}>
              <br></br>
              <Grid container spacing={1} >
                <Grid item xs={1}>
                  <FlightLandIcon className="inline-icon" />
                </Grid>
                <Grid item xs={11}>
                  <DestAirportAutocomplete
                    label={'To'}
                    name={`destination${num}`}
                    storeDestination={handleChangeDest}
                  />
                </Grid>
              </Grid>
            </div>
          ))}

          <Grid container spacing={1}>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
              <div className="fab-space-left"></div>
              <Fab classes={{
                root: classes.root,
                focused: classes.focused,
                label: classes.label,
              }} aria-label="add">
                <AddIcon onClick={() => appendInput()} />
              </Fab>
            </Grid>
            <Grid item xs={5}></Grid>
          </Grid>
          <br></br>
          <br></br>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={1} justify="space-around">
              <Grid item xs={5}>
                <KeyboardDatePicker
                  disableToolbar='true'
                  allowKeyboardControl='true'
                  variant="outlined" margin="normal" id="date-picker-dialog"
                  label="Depart" format="MMM do"
                  onChange={date => handleChange('goDate', date)}
                  inputVariant="outlined" KeyboardButtonProps={{ 'aria-label': 'change date' }}
                  name="goData" value={formData.goDate}
                />
              </Grid>
              <Grid item xs={5}>
                <KeyboardDatePicker
                  disableToolbar='true'
                  allowKeyboardControl='true'
                  variant="outlined" margin="normal" id="date-picker-dialog"
                  label="Return" format="MMM do" onChange={date => handleChange('backDate', date)}
                  inputVariant="outlined" KeyboardButtonProps={{ 'aria-label': 'change date' }}
                  name="backDate" value={formData.backDate}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>

          <br></br>
          <br></br>
          <br></br>

          <button
            /* disabled={!isEnabled} */
            className="searchButton"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            styles={{ backgroundColor: '#282829', fontWeight: '100' }}
          >
            SEARCH
        </button>
          <br></br>
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default UserInput;