import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './userInput.css'
import { fetchDataWeather, fetchDataWeatherTwo } from '../../actions/weather';
import Weather from '../weather/weather';
import WCont from '../weather/wCont';
import './userInput.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchDataFlights } from '../../actions/flights';
import { fetchHotelData } from '../../actions/hotels';
import { connect } from 'react-redux';
import { bigGiantAction } from '../../actions/index'


const UserInput = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="errorMsg">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, meta }) => {
    const divError = ` field ${meta.touched && meta.error ? 'error' : ''}`;

    const type =
      input.name === 'goDate' || input.name === 'backDate' ? 'date' : 'text';

    return (
      <div className={divError}>
        <input {...input} autoComplete="off" className="input" type={type} />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = formValues => {
    console.log(formValues);
<<<<<<< HEAD
    dispatch(bigGiantAction());
    // this.props.history.push('/TripResults');
  };
=======
    // dispatch(fetchHotelData(formValues));
    dispatch(fetchDataWeather(formValues.destination1))
    if (formValues.destination2) {
      dispatch(fetchDataWeatherTwo(formValues.destination2))
    }
    
  }


 
>>>>>>> 7b6bc05f04dedb592c9c063cd9de244fba4f4252

  
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="error">
        <div className="from">
          <div>
            <Field
              name="departure"
              component={renderInput}
              type="text"
              placeholder="From"
            />
          </div>
        </div>
        <div className="to">
          <div>
            <Field
              name="destination1"
              component={renderInput}
              type="text"
              placeholder="To"
            />
          </div>
        </div>

        {/* <div className="Wrapper"><div></div> */}
        <div className="to">
          <div >
            <div>
              <Field
                name="destination2"
                component={renderInput}
                type="text"
                placeholder="To"
              />
            </div>
          </div>
        </div>

        <div className="go">
          <div>
            <div>
              <Field
                name="goDate"
                component={renderInput}
                type="date"
                placeholder="go"
                className="datepicker"
              />
            </div>
          </div>
        </div>

        <div className="back">
          <div>
            <div>
              <Field
                name="backDate"
                component={renderInput}
                type="date"
                placeholder="back"
                className="datepicker"
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="input">Submit</button>
          </div>
        </div>

      </form>

      <Weather />
      <WCont />
    </div>
  );
};

<<<<<<< HEAD
// const inputValidator = values => {
//   const errors = {};
//   if (!values.departure) {
//     errors.departure = 'departure city is required';
//   }
//   if (!values.destination) {
//     errors.destination = 'destination city is required';
//   }
//   return errors;
// };
=======

const inputValidator = values => {
  const errors = {};
  if (!values.departure) {
    errors.departure = 'departure city is required';
  }
  if (!values.destination) {
    errors.destination = 'destination city is required';
  }
  return errors;
};
>>>>>>> 7b6bc05f04dedb592c9c063cd9de244fba4f4252

export default reduxForm({
  form: 'userInput',
  // validate: inputValidator,
  destroyOnUnmount: false
})(UserInput);

