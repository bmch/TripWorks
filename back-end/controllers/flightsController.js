'use strict';
// const Flight = require('../models/flights');
const request = require('request-promise');
// var unirest = require("unirest");

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

exports.postFlights = async ctx => {

  let options = ctx.request.body;
  
  const wait = async (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
  });

  while (ctx.status !== 201) {
    try {
      console.log('POST to skyscanner for: ', options.form.destinationPlace);
      await request(options, function (error, response, body) {
    
        console.log('Status Code: ', response.statusCode)
        if (response.statusCode === 201) {
          ctx.status = response.statusCode
          ctx.set('Access-Control-Expose-Headers', 'location');
          ctx.set('location', response.headers.location);
          // ctx.response.body = response.headers.location
          return true;
        } else wait(2000);
      })
    } catch (error) {
      console.log('Error caught, reattemping request')
    }
  }
  console.log('Response success for', options.form.destinationPlace);
};