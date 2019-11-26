'use strict';
const Flight = require('../models/flights');
exports.createFlight = async ctx => {
  try {
    console.log(ctx.request.body);
    
    const flight = new Flight(ctx.request.body);
    const result = await flight.save();
    console.log(result);
    
    ctx.status = 201;
    ctx.body = result;
  } catch (error) {
    ctx.status = 401;
    console.log(error);  
  }
};