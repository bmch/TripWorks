'use strict';

const SavedTrip = require('../models/savedTrip');

exports.savedTripsAdd = async ctx => {
  try {
    const userTrip = ctx.request.body;
    const user = ctx.user.username;

    const trip = await SavedTrip.create({savedtrips: userTrip, username: user});
    ctx.body = trip;
    ctx.status = 201;
    console.log('success');
    console.log(ctx.body);
  } catch (error) {
    ctx.status = 401;
    console.log('unable to save trip to the database');
  }
};

exports.findTrip = async ctx => {
  const user = ctx.user.username;

  try {
    ctx.body = await SavedTrip.findOne({'username':user})
    ctx.status = 200;
  } catch (error) {    
    ctx.body = {
      status: 'unsuccessful',
      message: 'unable to return from database',
      data: error
    }
  }
};
