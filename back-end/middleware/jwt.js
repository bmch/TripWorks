const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWToken = async (ctx, next) => {
  ctx.jwt = {},
  ctx.jwt['modified'] = false;

  if (!ctx.request.headers.authorization && ctx.url !== '/register') return await next();
  if(ctx.request.headers.authorization) {
    const authorization = ctx.request.headers.authorization.split(' ');

    if (authorization[0] !== 'Bearer') {
      await next();
    } else {
      let decoded = jwt.verify(authorization[1], process.env.JWT_SECRET);
      ctx.user = {
        username: decoded.username
      };
      await next();
    }
  } else await next();

  if (ctx.jwt.modified) {
    const token = jwt.sign(ctx.user, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });
    if (!ctx.body) {
      ctx.body = {'jwt':token}
    }else {
      Object.assign(ctx.body, {'jwt':token})
    }
  }
}


module.exports = JWToken;