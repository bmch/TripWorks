import React from 'react';
import MUIPlacesAutocomplete, { geocodeBySuggestion } from 'mui-places-autocomplete';
import { fontSize } from '@material-ui/system';

class DestAirportAutocomplete extends React.Component {
  constructor() {
    super();
    this.state = {
      coordinates: null,
      errorMessage: null,
      googleData: null,
      airportName: '',
      iata: ''
    };

    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  onSuggestionSelected(googleData) {

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
      const { geometry } = results[0];
      const coordinates = {
        lat: geometry.location.lat().toFixed(7),
        lng: geometry.location.lng().toFixed(7)
      };
      console.log('coordinates ', coordinates);

      const check = console.log(`https://api.aerisapi.com/places/airports/closest/?p={${coordinates.lat},${coordinates.lng}}&limit=1&radius=120miles&filter=largeairport&client_id=${process.env.REACT_APP_AERIS_API_ID}&client_secret=${process.env.REACT_APP_AERIS_API_SECRET}`)

      fetch(
        `https://api.aerisapi.com/places/airports/closest/?p={${coordinates.lat},${coordinates.lng}}&limit=1&radius=120miles&filter=largeairport&client_id=${process.env.REACT_APP_AERIS_API_ID}&client_secret=${process.env.REACT_APP_AERIS_API_SECRET}`
      )
        .then(res => res.json())
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
    return (
      <div>
        <MUIPlacesAutocomplete
          onSuggestionSelected={this.onSuggestionSelected}
          textFieldProps={{
            label: this.props.label,
            variant: 'outlined',
            style: {
              width: 400,
              backgroundColor: 'white',
              fontSize: '16px',
        
            },
            className: 'classes.textField'

          }}
          renderTarget={() => <div />}
        />
        <div>
          <br></br>
          {this.state.iata && 'IATA code: ' + this.state.iata.toUpperCase()}
          {this.state.errorMessage && 'Please try again '}
        </div>
      </div>
    );
  }
}

DestAirportAutocomplete.description = 'Geocoding (i.e. latitude/longitude) a selected suggestion';

export default DestAirportAutocomplete;