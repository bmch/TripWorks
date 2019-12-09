'use strict';
const request = require('request-promise');


exports.postFlights = async ctx => {

  let options = ctx.request.body;
  
  const wait = async (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
  });

  while (ctx.status !== 201) {
    try {
      console.log('POST to skyscanner for: ', options.form.destinationPlace);
      console.log(options)
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