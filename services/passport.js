const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys.js')
const mongoose = require('mongoose')

const User = mongoose.model('users')

// 5feaf25f45a6c03fdb6a130e
// 73e8340003c5f522f919886766245968
passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
})

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id }).then((existingUser) => {
                if (existingUser) {
                    done(null, existingUser)
                } else {
                    new User({ googleId: profile.id })
                        .save()
                        .then((user) => done(null, user))
                        .catch((error) => {
                            console.log(error)
                        })
                }
            })
        }
    )
)
