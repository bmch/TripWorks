import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './userInput.css'


const UserInput = ({handleSubmit}) => {

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
      <div className="errorMsg">
        <div className="header">{error}</div>
      </div>
      );
    }
  }

  const renderInput = ({ input, meta }) => {
    const divError = ` field ${ meta.touched && meta.error ? 'error' : ''}`;
 
    const type = (input.name==='goDate'||input.name==='backDate') ? 'date':'text'
    
    return (
      <div className={divError}>
       <input { ...input } autoComplete="off" className="input" type={type}/>
        {renderError(meta)}
      </div>
    );
  }

  const onSubmit = (formValues) => {
    console.log(formValues);  
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="error">
        <div className="from">
          <div >
            <Field
              name="departure"
              component={renderInput}
              type="text"
              placeholder="From"
            />
          </div>
        </div>
        <div className="to">
          <div >
            <Field
              name="destination1"
              component={renderInput}
              type="text"
              placeholder="To"
            />
          </div>
        </div>
          <div className="Wrapper">
            <div className="to">
              <div >
                <Field
                  name="destination2"
                  component={renderInput}
                  type="text"
                  placeholder="To"
                />
              </div>
          </div>
          <div className="go">
              <div >
                <Field
                  name="goDate"
                  component={renderInput}
                  type="date"
                  placeholder="go"
                  className="datepicker"
                />
              </div>
          </div>
          <div className="back">
              <div >
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
    </div>
  )
};

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


export default reduxForm({
  form: 'userInput',
  validate: inputValidator,
  destroyOnUnmount: false
})(UserInput);