'use strict'

const mongoose = require('../db');

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  pictures: Schema.Types.Mixed
});

//compile our schema to the model
module.exports = mongoose.model('Picture', PictureSchema);