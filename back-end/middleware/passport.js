const passport = require("koa-passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");

passport.serializeUser((user, done) => {
  console.log(user,'--------');
  
  console.log(`[passport.serializeUser] ${user} -> ${user.id}`);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log(`[passport.deserializeUser] ${id} -> userData`);
   
  try {
    const user = await User.findById(id);

    done(null, user);
  } catch (error) {
    done(error);
  }
});

const localStrategy = new LocalStrategy(async function(
  username,
  password,
  done
) {
  console.log(`[passport.localStrategy] ${username} ${password}`);

  try {
    const user = await User.findOne({ username: username });
    console.log(`[passport.localStrategy] ${user}`);

    if (!user || !(await verifyPassword(user, password))) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    console.error(error);
    return done(error);
  }
});

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CONSUMER_KEY,
    clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async function(ctx, token, tokenSecret, profile, done) {
    console.log(profile);

    try {
      const user = await User.findOneAndUpdate({ oauthID: profile.id }, profile, {

        new: true, // return new Document
        upsert: true // CREATE NEW IF DOESNT EXISt
      })
      console.log(user);
    
      
      done(null, user)
     
    } catch (error) {
      console.log(error);
    }
  }
);

passport.use(googleStrategy);

async function verifyPassword(user, password) {
  console.log(`[verifyPassword] checking ${password} against ${user.password}`);

  try {
    await bcrypt.compare(password, user.password);
    console.log(`[verifyPassword] ✅`);
    return true;
  } catch (error) {
    console.log(`[verifyPassword] ❌`);
    return true;
  }
}
module.exports = passport;
