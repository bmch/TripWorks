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
  // try {
    let options = ctx.request.body;
    console.log('POST to skyscanner at ' + Date.now() + 'with data: ', options);
    //await //new Promise (function (resolve, reject) {
    await request(options, function (error, response, body) {
      console.log(response.statusCode)
        if (error) {
          if (response.statusCode === 429) {
            console.log('Too many requests.')
            ctx.status = 429;
            return null;
          }
        }
        ctx.set('Access-Control-Expose-Headers', 'location');
        ctx.set('location', response.headers.location);
        ctx.status = 201;
        console.log('RESPONSE: ', ctx.response);
        // resolve();
      });
    // })
  // } catch (error) {
  //   ctx.status = 401;
  //   console.log(error);
  // }
};