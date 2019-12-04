import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DestAirportAutocomplete from './DestAirportAutocomplete';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { addFormValues } from '../../actions/addFormValues';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';

import './UserInput2.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { fetchDataWeatherOne, fetchDataWeatherTwo } from '../../actions/weather'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme1 = createMuiTheme({
  overrides: {
    MuiSelect: {
      select: {
        "&:focus": {
          background: "#282829"
        }
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    // borderTop: '1px',
    // borderBottom: '1px',
    background: '#282829',
    '&$focused': {
      background: '#282829'
    },
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(40, 40, 41 .3)',
  },
  focused: {
    // background: '#282829'
  },
  // label: {
  //   textTransform: 'capitalize',
  // },
  // notchedOutline: {
  //   borderLeft: '1px',
  //   borderRight: '1px',
  //   // borderWidth: '1px',
  //   borderColor: 'green !important'
  // },
}));


function UserInput2({ addFormValues }) {
  const dispatch = useDispatch();
  const classes = useStyles();
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

  /// vvv drawer vvv
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Profile'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Log Out'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  // const fullList = side => (
  //   <div
  //     className={classes.fullList}
  //     role="presentation"
  //     onClick={toggleDrawer(side, false)}
  //     onKeyDown={toggleDrawer(side, false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );
  /// ^^^ drawer ^^^


  return (
    <MuiThemeProvider theme={theme1}>
    <div>
      <Button onClick={toggleDrawer('left', true)}>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className='spacing-top'></div>
        <div className="suggest">

          <Grid container spacing={1} >
            <Grid item xs={1}>
              <FlightTakeoffIcon className="inline-icon" />
            </Grid>
            <Grid item xs={11}>
              <DestAirportAutocomplete
                label="From"
                name="departure"
                storeDestination={handleChange}
                classes={{
                  root: classes.root,
                  notchedOutline: classes.notchedOutline
                }}
              />
            </Grid>

            <br></br><br></br>

            <Grid item xs={1}>
              <FlightLandIcon className="inline-icon" />
            </Grid>
            <Grid item xs={11}>
              <DestAirportAutocomplete
                label="To"
                name="destination1"
                storeDestination={handleChange}
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
                    storeDestination={handleChange}
                  />
                </Grid>
              </Grid>
            </div>
          ))}
          <div className='spacing-middle'></div>
          <Grid container spacing={1}>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
              <div className="fab-space-left"></div>

              <Fab classes={{
                root: classes.root,
                selected: classes.selected,
                label: classes.label,
              }} aria-label="add">
                <AddIcon onClick={() => appendInput()} />
              </Fab>
              {/* </MuiThemeProvider> */}
            </Grid>
            <Grid item xs={5}></Grid>
          </Grid>

          <br></br>
          <br></br>

          <div className='spacing-middle-two'></div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={1} justify="space-around">
              <Grid item xs={6}>
                <KeyboardDatePicker
                  classes={{
                    // root: classes.root,
                    notchedOutline: classes.notchedOutline
                  }}
                  variant="outlined"
                  margin="normal"
                  id="date-picker-dialog"
                  label="Depart"
                  format="MMM do"
                  onChange={date => handleChange('goDate', date)}
                  inputVariant="outlined"
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                  name="goData"
                  value={formData.goDate}
                />
              </Grid>
              <Grid item xs={6}>
                <KeyboardDatePicker
                  variant="outlined"
                  margin="normal"
                  id="date-picker-dialog"
                  label="Return"
                  format="MMM do"
                  onChange={date => handleChange('backDate', date)}
                  inputVariant="outlined"
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                  name="backDate"
                  value={formData.backDate}
                  style={{
                    borderLeft: '1px',
                    borderRight: '1px',
                    borderTop: '0px',
                    borderBottom: '0px'
                  }}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
          <br></br>
          <br></br>
          {/* {JSON.stringify(formData.backDate)} */}
          <br></br>
          <div className='spacing-bottom'></div>
          <button
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
      </MuiPickersUtilsProvider >
    </div >
    </MuiThemeProvider>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addFormValues: data => dispatch(addFormValues(data))
  };
};
UserInput2 = connect(null, mapDispatchToProps)(UserInput2);

export default UserInput2;

// justify="center"

//`Destination ${num}`

//<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>