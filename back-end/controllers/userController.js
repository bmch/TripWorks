'use strict'

const bcrypt = require('bcrypt');
const atob = require('atob');

const User = require('../models/user');
const filterProps = require('../services/utils').filterProps;

exports.createUser = async ctx => {
  try {
    const salt = 10;
    const userData = ctx.request.body

    let user = await User.findOne({"username":userData.username}, function(err, result) {
      console.log("result:"+result); //TODO: remove this console log
      });

      if (user) {
      ctx.status = 400;
      ctx.body = {
        errors: [
          'Username already exists'
        ]
      };
    } else {
      user = filterProps(userData, [
        'username',
        'password',
        'firstName',
        'lastName',
        'email',
        'profilePic']);  
      user['password'] = await bcrypt.hash(user.password, salt).then((hash) => hash);

      await User.create({
        username: user.username,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePic: user.profilePic
      });
      ctx.body = { username: userData.username, email:userData.email };
      ctx.user = { username: userData.username};
      ctx.status = 201;
      console.log('success');
    }
  } catch (error) {
    ctx.status = 404;
    console.log('unable to save user to the database');
  }
};