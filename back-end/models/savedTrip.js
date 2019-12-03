'use strict';

const mongoose = require('../db');

const Schema = mongoose.Schema;

const savedTripSchema = new Schema({
  // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  savedtrips: Schema.Types.Mixed,
  dates: Schema.Types.Mixed
});

//compile our schema to the model
module.exports = mongoose.model('SavedTrip', savedTripSchema);
