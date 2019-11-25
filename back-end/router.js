'use strict'

const Router = require('koa-router');
const router = new Router();

const config = require('./config/config');
const authorize = require('./middleware/auth');
const userCont = require('./controllers/userController');
const hotelCont = require('./controllers/hotelController');
const weatherCont = require('./controllers/weatherController');
const picCont = require('./controllers/picsController');
const flightCont = require('./controllers/flightsController');

router
  // .post('/login', userCont.signIn)
  .post('/register', userCont.createUser)
  .post('/postWeather', weatherCont.creatWeather) 
  .post('/postHotels', hotelCont.createHotel) 
  .post('/postFlights', flightCont.createFlight) 
  .post('/postPictures', picCont.createPicture); 


  module.exports = router; 



