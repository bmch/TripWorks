'use strict'

const koa = require('koa');
const app = new koa();
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser');
const router = require('./router');
// require('./db')

const config = require('./config/config');

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes());

app.listen(config.PORT, () => {
  console.log(`server running on 🚀 ${config.PORT}`);
})


