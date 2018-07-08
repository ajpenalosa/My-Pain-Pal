// *********************************************************************************
// view-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const router = require('express').Router();
const db = require("../models");

// Routes
// =============================================================

// Home Page
router.get("/", function (req, res) {
    res.render('index');
});

// Register
router.get("/register", function (req, res) {
    res.render('index');
});

// Log In
router.get("/login", function (req, res) {
    res.render('index');
});

// Dashboard
router.get("/dashboard", function (req, res) {
    if (req.session.user) {
        res.render('dashboard');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function(result) {
            req.session.user = result.id
        });
    } else {
        res.redirect('/');
    };
});

// Add New
router.get("/add-new", function (req, res) {
    if (req.session.user) {
        res.render('post');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id
        });
    } else {
        res.redirect('/');
    };
});

// Journal
router.get("/journal", function (req, res) {
    if (req.session.user) {
        res.render('journal');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id
        });
    } else {
        res.redirect('/');
    };
});

// Chart
router.get("/chart", function (req, res) {
    if (req.session.user) {
        res.render('chart');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id
        });
    } else {
        res.redirect('/');
    };
});

// Calendar
router.get("/calendar", function (req, res) {
    if (req.session.user) {
        res.render('calendar');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id
        });
    } else {
        res.redirect('/');
    };
});

// Body
router.get("/body", function (req, res) {
    if (req.session.user) {
        res.render('body');
    } else if (req.cookie) {
        db.User.findOne({
            where: {
                token: req.session.user.token
            }
        }).then(function (result) {
            req.session.user = result.id
        });
    } else {
        res.redirect('/');
    };
});


module.exports = router;