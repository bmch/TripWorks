'use strict'

const koa = require('koa');
const app = new koa();
const jwt = require('./middleware/jwt');
require('dotenv').config();
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const session = require('koa-session');
const passport = require('koa-passport');
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;


const config = require('./config/config');
require('./middleware/passport')


app.keys = ['super-secret-key'];

app
  .use(cors())
  .use(jwt)
  .use(bodyParser())
  .use(session(app))
  .use(passport.initialize())
  .use(passport.session())
  .use(router.routes())
  
app.listen(config.PORT, () => {
  console.log(`server running on 🚀 ${config.PORT}`);
})


