'use strict'

const mongoose = require('../db');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  oauthID: {
    type: Number
  },
  username: {
    type: String,
    // require: true
  },
  password: {
    type: String,
    // require: true
  },
  firstName: {
    type: String,
    // require: true
  },
  lastName: {
    type: String,
    // require: true
  },
  email: {
    type: String,
    // require: true
  },
  profilePic: {
    type: String,
    // require: true
  }
});

//compile our schema to the model
module.exports = mongoose.model('User', UserSchema);