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

// Register
router.get("/register", function (req, res) {
    res.render('register');
});

// Log In
router.get("/login", function (req, res) {
    res.render('login');
});

// Add New
router.get("/add-new", function (req, res) {
    res.render('post');
});

// Journal
router.get("/journal", function (req, res) {
    res.render('journal');
});

// Chart
router.get("/chart", function (req, res) {
    res.render('chart');
});

// Calendar
router.get("/calendar", function (req, res) {
    res.render('calendar');
});

// Body
router.get("/body", function (req, res) {
    res.render('body');
});

//testing purposes for pain form
// router.get("/posts", function (req, res) {
//     res.render('post');
// });

//testing purposes for pain form
// router.get("/journal", function (req, res) {
//     res.render('post');
// });

module.exports = router;