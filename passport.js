import passport from "passport";
import User from "./model/User";

passport.use(User.createStrategy());

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    })
})