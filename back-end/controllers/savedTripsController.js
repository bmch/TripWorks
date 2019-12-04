'use strict';

const SavedTrip = require('../models/savedTrip');

exports.savedTripsAdd = async ctx => {
  try {
    console.log('ctx.request.body ---->', ctx.request.body);
    console.log('ctx.params ---->', ctx.params);
    const trip = new SavedTrip(ctx.request.body);
    const result = await trip.save();
    ctx.body = result;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 401;
    console.log('unable to save trip to the database');
  }
};

exports.find = async ctx => {
  ctx.body = await SavedTrip.find();
};
