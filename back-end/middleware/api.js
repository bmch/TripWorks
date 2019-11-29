var request = require("request");

const api = async (ctx, next) => {
  console.log('request payload', ctx.request.body);

  request(ctx.request.body, function (error, response, body) {
    if (error) throw new Error(error);
    let location = response.headers.location;
    ctx.response.body = location;
    console.log(ctx.response.body);
    // console.log(body);
  });

  return await next();
};

module.exports = api;