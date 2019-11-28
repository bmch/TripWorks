import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import './userInput.css'
import { fetchDataWeather, fetchDataWeatherTwo } from '../../actions/weather';
import Weather from '../weather/weather';
import WCont from '../weather/wCont';

const UserInput = ({ handleSubmit }) => {

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
    const divError = ` field ${meta.touched && meta.error ? 'error' : ''}`;

    const type = (input.name === 'goDate' || input.name === 'backDate') ? 'date' : 'text'

    return (
      <div className={divError}>
        <input {...input} autoComplete="off" className="input" type={type} />
        {renderError(meta)}
      </div>
    );
  }
  
  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    
    dispatch(fetchDataWeather(formValues.destination1))
    if (formValues.destination2) {
      dispatch(fetchDataWeatherTwo(formValues.destination2))
    } 
    console.log(formValues.goDate)
    return <WCont formValuesGo={formValues.goDate} formValuesBack={formValues.backDate}/>
    console.log(formValues.goDate)
  }

  // if (flag=true) {
  //   return 
  // }

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
      <Weather />
      
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









// import React, { useEffect } from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
// import './userInput.css'
// import { fetchDataWeather } from '../../actions/weather';
// import {getWeather} from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/services/weather/weather-api.js';


// const UserInput = ({handleSubmit}) => {



//   // const getCity = () => {
//   //   console.log('action dispatched');
//   //   dispatch(fetchDataWeather(city))
//   // }

//   const renderError = ({ error, touched }) => {
//     if (touched && error) {
//       return (
//       <div className="errorMsg">
//         <div className="header">{error}</div>
//       </div>
//       );
//     }
//   }

//   const renderInput = ({ input, meta }) => {
//     console.log(meta);  
//     const divError = ` field ${ meta.touched && meta.error ? 'error' : ''}`;
//     // const typeChecker = `${meta.active && (input.name === 'goDate' || 'backDate') ? 'date' : 'text'}`
//     return (
//       <div className={divError}>
//        <input { ...input } autoComplete="off" className="input" type="text"/>
//         {renderError(meta)}
//       </div>
//     );
//   }



//   const onSubmit = (formValues) => {
//   //   const city = useSelector(state => state.form.userInput.values.destination);
//   // const dispatch = useDispatch();
//   // dispatch(fetchDataWeather(city))

//   //   console.log(formValues);  
//   }

//   // const fetchWeather = (city) => {
//   //   getWeather(city)
//   // }

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit(onSubmit)} className="error">
//         <div className="from">
//           <div >
//             <Field
//               name="departure"
//               component={renderInput}
//               type="text"
//               placeholder="From"
//             />
//           </div>
//         </div>
//         <div className="to">
//           <div >
//             <Field
//               name="destination"
//               component={renderInput}
//               type="text"
//               placeholder="To"
//             />
//           </div>
//         </div>
//           <div className="Wrapper">
//             <div className="go">
//               <div >
//                 <Field
//                   name="goDate"
//                   component={renderInput}
//                   type="date"
//                   placeholder="go"
//                   className="datepicker"
//                 />
//               </div>
//           </div>
//           <div className="back">
//               <div >
//                 <Field
//                   name="backDate"
//                   component={renderInput}
//                   type="date"
//                   placeholder="back"
//                   className="datepicker"
//                 />
//               </div>
//           </div>
//           <div className="back">
//               <div >
//                 <Field
//                   name="backDate"
//                   component={renderInput}
//                   type="date"
//                   placeholder="back"
//                   className="datepicker"
//                 />
//               </div>
//           </div>
//         </div>
//         <div className="field">
//           <div className="control">
//             <button 
//             className="input"
//             // onClick={}
//             >Submit</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// };

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




// export default reduxForm({
//   form: 'userInput',
//   validate: inputValidator
// })(UserInput);