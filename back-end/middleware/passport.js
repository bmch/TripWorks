const passport = require("koa-passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

exports.configurePassport = function() {
  passport.serializeUser((user, done) => { 
    console.log(`[passport.serializeUser] ${user} -> ${user.id}`)
    done(null, user.id); 
  });

  passport.deserializeUser(async (id, done) => {
    console.log(`[passport.deserializeUser] ${id} -> userData`)

    try {
      const user = await User.findOneById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  const localStrategy = new LocalStrategy(async function( username, password, done) {
    console.log(`[passport.localStrategy] ${username} ${password}`)

    try {
      const user = await User.findOne({ username: username });
      console.log(`[passport.localStrategy] ${user}`)

      if (!user || !await verifyPassword(user, password)) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      console.error(error)
      return done(error);
    }
  });

  // const registration = new LocalStrategy(async function({
  
  // }));

  passport.use(localStrategy);
}

async function verifyPassword(user, password) {
  console.log(`[verifyPassword] checking ${password} against ${user.password}`)

  try {
    await bcrypt.compare(password, user.password);
    console.log(`[verifyPassword] ✅`)
    return true;
  } catch (error) {
    console.log(`[verifyPassword] ❌`)
    return true;
  }
}