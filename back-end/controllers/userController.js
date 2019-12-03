'use strict'

const bcrypt = require('bcrypt');
const atob = require('atob');
const passport = require('passport');

const User = require('../models/user');
const filterProps = require('../services/utils').filterProps;

exports.signIn = async ctx => {
  const authenticate = ctx.request.headers.authorization.split(' ');  
  const decoded = atob(authenticate[1]).split(':');

  const user = await User.findOne({"username":decoded[0]});
  if (user) {
    const matchPass = await bcrypt.compare(decoded[1], user.password);
    
    if (matchPass) {
      ctx.user = {};
      ctx.user['username'] = user.username;
      ctx.jwt.modified = true;
      ctx.body = {username: user.username, email: user.email};
      ctx.status = 201;
    } else {
      ctx.status = 401;
      ctx.message = 'Password is Wrong';
    }
  } else {
    ctx.status = 401;
    ctx.message = 'Username is Wrong';
  }
}

exports.signInWithPassport = async ctx => {
  ctx.login(ctx.user)
  ctx.body = ctx.user;
  ctx.status = 200
}

exports.registerWithPassport = async ctx => {
  
}

exports.createUser = async ctx => {
  try {
    const salt = 10;
    const userData = ctx.request.body

    let user = await User.findOne({"username":userData.username});

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
      ctx.jwt.modified = true;
      ctx.status = 201;
      console.log('success');
    }
  } catch (error) {
    ctx.status = 404;
    console.log('unable to save user to the database');
  }
};

exports.registerWithPassport = async ctx => {

};