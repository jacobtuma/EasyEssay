// Include Server Dependencies
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import passport from 'passport';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import session from 'express-session'
var LocalStrategy = require('passport-local').Strategy;


import routes from "./server/controllers";
import DatabaseSeeder from "./server/seed-data/seed";

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('public'));
app.use(cookieParser('secret'));



// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect('mongodb://jacob2:122@ds051665.mlab.com:51665/essay');
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    let seeder = new DatabaseSeeder();
    seeder.runSeed();
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------

app.use("/api", routes);

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());



// Connect Flash
app.use(flash());



// Global Vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});







export default app;