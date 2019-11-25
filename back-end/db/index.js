'use strict'

const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(`${config.dbUrl}/trip_works`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get reference of the database 
const db = mongoose.connection

//console logging the error before hand and also checking whether or not the connection is successful.
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
  console.log('connection successful');
})


module.exports = mongoose;
