import express from "express";
import User from "../models/user";
import bcrypt from 'bcryptjs'
import passport from "./passport.js";
var LocalStrategy = require("passport-local").Strategy;
var isAuthenticated = require("./isAuthenticated");

const router = express.Router();
var path = require("path");

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

function gotoAlumniHome(req, res)
{
    //    if (req.user){
    res.sendFile(path.join(__dirname + "/../../public/html/index.html"));
    //    }
}





router.route("/login").post(passport.authenticate('login', {
    successRedirect : '/api/users/essayhome',
    failureRedirect : '/api/users/login/ddddd',
    failureFlash : false
}));
router.route("/register").post(registerAccount);
router.route("/essayhome").get(isAuthenticated, gotoAlumniHome);
export default router;
