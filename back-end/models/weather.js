'use strict'

const mongoose = require('../db');

const Schema = mongoose.Schema;

const WeatherSchema = new Schema({
  Weather: Schema.Types.Mixed
});

//compile our schema to the model
module.exports = mongoose.model('Weather', WeatherSchema);