'use strict'

const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(`${config.dbUrl}/trip_works`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(console.log)

//get reference of the database 
const db = mongoose.connection

//console logging the error before hand and also checking whether or not the connection is successful.
db.on('error', (err)=>{
  console.error(err)
});

db.once('open', () => {
  console.log('connection successful');
})


module.exports = mongoose;
