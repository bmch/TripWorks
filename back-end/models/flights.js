'use strict'

const mongoose = require('../db');

const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  flights: Schema.Types.Mixed
});

//compile our schema to the model
module.exports = mongoose.model('Flight', FlightSchema);