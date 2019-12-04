import React from 'react';
import MUIPlacesAutocomplete, {
  geocodeBySuggestion
} from 'mui-places-autocomplete';


import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },

//   cssLabel: {
//     color : 'green'
//   },

//   cssOutlinedInput: {
//     '&$cssFocused $notchedOutline': {
//       borderColor: `${theme.palette.primary.main} !important`,
//     }
//   },

//   cssFocused: {},

//   notchedOutline: {
//     borderLeft: '5px',
//     borderRight: '5px',
//     // borderWidth: '1px',
//     borderColor: 'green !important'
//   },

// });

const styles = makeStyles(theme => ({
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
  
  // notchedOutline: {
  //   borderLeft: '1px',
  //   borderRight: '1px',
  //   // borderWidth: '1px',
  //   borderColor: 'green !important'
  // },
}));


class DestAirportAutocomplete extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'InputMode',
      coordinates: null,
      errorMessage: null,
      googleData: null,
      airportName: '',
      iata: ''
    };

    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }
  

  onSuggestionSelected(googleData) {
    // functions to get the latitude and longitude for the selected suggestion.

    console.log('googles suggestion -', googleData);
    geocodeBySuggestion(googleData).then(results => {
      console.log(results);
      if (results.length < 1) {
        this.setState({
          errorMessage:
            'Geocode request completed successfully but without any results'
        });
        return;
      }

      // Just use the first result in the list to get the geometry coordinates
      const { geometry } = results[0];
      const coordinates = {
        lat: geometry.location.lat().toFixed(7),
        lng: geometry.location.lng().toFixed(7)
      };
      console.log('coordinates ', coordinates);

      fetch(
        `https://api.aerisapi.com/places/airports/closest/?p={${coordinates.lat},${coordinates.lng}}&limit=1&radius=120miles&filter=largeairport&client_id=${process.env.REACT_APP_AERIS_API_ID}&client_secret=${process.env.REACT_APP_AERIS_API_SECRET}`
      )
        .then(res => res.json())
        // if successful response with data
        .then(res => {
          console.log('airport res', res);
          if (res.response[0]) {
            this.setState({
              iata: res.response[0].profile.iata,
              googleData: googleData,
              airportData: res,
              coordinates: coordinates,
              airportName: res.response[0].place.name,
              errorMessage: null
            });
            this.props.storeDestination({
              iata: res.response[0].profile.iata.toUpperCase(),
              googleData: googleData,
              airportData: res,
              coordinates: coordinates,
              airportName: res.response[0].place.name
            });
          } else {
            console.log('name not received');
            this.setState({
              airportName: '',
              iata: '',
              errorMessage: 'Geocode request completed but w/o nearby airport'
            });
          }
        })
        .catch(err => console.log(err));
    });
  }

  render() {
    // const classes = styles();
    // const { classes } = this.props;
    return (
      <div>
        <MUIPlacesAutocomplete
          onSuggestionSelected={this.onSuggestionSelected}
          textFieldProps={{
            label: this.props.label,
            variant: 'outlined',
            style: {
              width: 320,
              backgroundColor: 'white',
            },      
            className: 'classes.textField'
          }}
          // classes={{
          //   root: classes.root,
          //   notchedOutline: classes.notchedOutline
          // }}
          // InputLabelProps={{
          //   classes: {
          //     root: classes.cssLabel,
          //     focused: classes.cssFocused,
          //   },
          // }}
          // InputProps={{
          //   classes: {
          //     // root: classes.cssOutlinedInput,
          //     // focused: classes.cssFocused,
          //     notchedOutline: classes.notchedOutline,
          //   },
          //   inputMode: "numeric"
          // }}
          renderTarget={() => <div />}
        />
        <div>
          <br></br>
          {/* {this.state.airportName && this.state.airportName + ', '}
          {this.state.iata && 'IATA code: ' + this.state.iata.toUpperCase()}
          {this.state.errorMessage && 'Please try again '} */}
        </div>
      </div>
    );
  }
}

DestAirportAutocomplete.description =
  'Geocoding (i.e. latitude/longitude) a selected suggestion';

export default DestAirportAutocomplete;

// borderLeft: '1px',
              // borderRight: '1px',
              // borderTop: '0px',
              // borderBottom: '0px'
