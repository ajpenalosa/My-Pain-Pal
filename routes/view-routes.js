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

// Home Page
router.get("/", function (req, res) {
    res.render('index');
});

// Dashboard
router.get("/dashboard", function (req, res) {
    res.render('dashboard');
});

module.exports = router;