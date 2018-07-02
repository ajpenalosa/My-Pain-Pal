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

router.get("/", function (req, res) {
    res.render('index');
});


//testing purposes for pain form
router.get("/posts", function (req, res) {
    res.render('post');
});

//testing purposes for pain form
router.get("/journal", function (req, res) {
    res.render('post');
});



module.exports = router;