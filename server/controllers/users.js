import express from "express";
import User from "../models/user";
import bcrypt from 'bcryptjs'
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var isAuthenticated = require("./" +
    "isAuthenticated");

const router = express.Router();

function registerAccount(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    var newUser = new User({
        name: name,
        email:email,
        username: username,
        password: password
    });
createUser(newUser, function(err, user) {
    if(err) throw err;
    console.log(user)
})
}

function createUser(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

function getUserByUsername(username, callback){
    var query = {username: username};
    findOne(query, callback);
}

function getUserById(id, callback){
    findById(id, callback);
}

function comparePassword(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
};

    passport.use(new LocalStrategy(
        function (username, password, done) {
            getUserByUsername(username, function (err, user) {
                if (err) throw err;
                if (!user) {
                    return done(null, false, {message: 'Unknown User'});
                }

                comparePassword(password, user.password, function (err, isMatch) {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: 'Invalid password'});
                    }
                });
            });
        }));



passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    getUserById(id, function(err, user) {
        done(err, user);
    });
});
router.route("/login").post(passport.authenticate('local', {
    successRedirect : '/api/',
    failureRedirect : '/api/login/',
    failureFlash : false
}));
router.route("/register").post(registerAccount);

export default router;
