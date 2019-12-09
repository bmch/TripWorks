'use strict';

const mongoose = require('../db');

const Schema = mongoose.Schema;

const savedTripSchema = new Schema({
  // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  savedtrips: {
    type: Schema.Types.Mixed
  },
  username: {
    type: String,
  }
});

//compile our schema to the model
module.exports = mongoose.model('SavedTrip', savedTripSchema);
