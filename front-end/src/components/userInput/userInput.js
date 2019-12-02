import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './userInput.css'

import Weather from '../weather/weather';
import WCont from '../weather/wCont';
import './userInput.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../actions/photos';
// import { connect } from 'react-redux';
import { giantAction } from '../../actions/index'
import { weatherAction } from '../../actions/index'


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

  // let go = formValues.goDate
  // let back = formValues.backDate
  // const dispatch = useDispatch();

  const onSubmit = formValues => {
    dispatch(giantAction());
    
    dispatch(fetchDataWeather(formValues.destination1))
    if (formValues.destination2) {
      dispatch(fetchDataWeatherTwo(formValues.destination2))
      // dispatch(bigGiantAction());
    // this.props.history.push('/TripResults');
    // dispatch(fetchHotelData(formValues));
    }
    
  

    
    // dispatch(weatherAction())

 

    // this.props.history.push('/TripResults')
    // dispatch(fetchPhotos());
  };

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
  )
};

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

export default reduxForm({
  form: 'userInput',
  // validate: inputValidator,
  destroyOnUnmount: false
})(UserInput);