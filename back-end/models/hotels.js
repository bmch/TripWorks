'use strict'

const mongoose = require('../db');

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
  hotels: Schema.Types.Mixed
});

//compile our schema to the model
module.exports = mongoose.model('Hotel', HotelSchema);