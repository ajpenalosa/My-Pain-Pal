// *********************************************************************************
// view-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const router = require('express').Router();
// const db = require("../models");

// Routes
// =============================================================

router.get("/register", function (req, res) {
    res.render('register');
});

router.get("/login", function (req, res) {
    res.render('login');
});

module.exports = router;