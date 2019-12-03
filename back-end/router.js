'use strict';

const Router = require('koa-router');
const router = new Router();
require('dotenv').config();

const config = require('./config/config');
const authorize = require('./middleware/authorize');
const userCont = require('./controllers/userController');
const flightCont = require('./controllers/flightsController');
const passport = require('koa-passport');

router
  .post('/login', userCont.signIn)
  .post(
    '/test',
    async (ctx, next) =>
      passport.authenticate('local', (error, user, info, status) => {
        console.log('[passport.authenticate]', user, error);
        if (user) {
          console.log('TCL from router: user', user);

          // Passport handles session
          // ctx.login(user);
          // ctx.redirect('/'); the redirection page should happen here
          ctx.user = user;
        } else {
          ctx.status = 400;
          ctx.body = { status: 'error', error };
        }
        next();
      })(ctx),
    userCont.signInWithPassport
  )
  .post(
    '/registerWithPassport',
    async (ctx, next) =>
      passport.authenticate('local', (error, user, info, status) => {
        if (user) {
          ctx.user = user;
        } else {
          ctx.status = 400;
          ctx.body = { status: 'error', error };
        }
        next();
      })(ctx),
    userCont.registerWithPassport
  )
  .post('/register', userCont.createUser)
  .post('/postFlights', flightCont.postFlights)
  .post('/savedtrips', savedT.savedTripsAdd)
  .get('/savedtrips', savedT.find);

module.exports = router;
