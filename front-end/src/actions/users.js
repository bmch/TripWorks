// import axios from 'axios';

// const apiClient = require('../services/user/apiClient');
// const BASE_URL = `http://localhost:3002`;


// //Get current user(me) from token in localStorage
// export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
// export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
// export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';
// export const RESET_TOKEN = 'RESET_TOKEN';

// //Sign Up User
// export const SIGNUP_USER = 'SIGNUP_USER';
// export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
// export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
// export const RESET_USER = 'RESET_USER';

// //Sign In User
// export const SIGNIN_USER = 'SIGNIN_USER';
// export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
// export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

// //log out user
// export const LOGOUT_USER = 'LOGOUT_USER';

// //signIn action creators
// export function signInUser(formValues) {
//   const request = axios.post(`${BASE_URL}/login`, formValues);

//   return {
//     type: SIGNIN_USER,
//     payload: request
//   };
// }

// export function signInUserSuccess(user) {
//   return {
//     type: SIGNIN_USER_SUCCESS,
//     payload: user
//   };
// }

// export function signInUserFailure(error) {
//   return {
//     type: SIGNIN_USER_FAILURE,
//     payload: error
//   };
// }

// export function logoutUser() {
//   return {
//     type: LOGOUT_USER
//   };
// }

// apiClient.logUserIn(inputs).then(user => ({
//   fetchLogin: (user,password) => dispatch ({
//     type: 'FETCH_LOGIN',
//     [API]: {
//       path: '/login',
//       method: 'POST',
//       headers: {
//         'Authorization':'Basic '+ btoa(`${user}:${password}`)
//       }
//     }
//   })
// });