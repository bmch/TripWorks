'use strict'; 

const Hotel = require('../models/hotels');

exports.createHotel = async ctx => {
  try {
    const hotel = new Hotel(ctx.request.body);
    const result = await hotel.save();
    ctx.body = result;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 401;
    console.log('unable to save hotel to the database');
  }
  
};