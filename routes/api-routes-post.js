// Dependencies
// =============================================================

// Requiring the models
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/journal/:id", function (req, res) {
        db.User.findAll({
                where: {
                    id: req.params.id
                },
                include: [db.Post]
            })
            .then(function (dbPost) {
                res.json(dbPost[0]);
            });
    });

    app.get("/api/dashboard/:id", function (req, res) {
        db.User.findAll({
                where: {
                    id: req.params.id
                },
                include: [db.Post]
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.post("/api/dashboard", function (req, res) {
        console.log(req.body);
        db.Post.create({

                body_part: req.body.body_part,
                pain_intensity: req.body.pain_intensity,
                pain_characteristics: req.body.pain_characteristics,
                pain_duration: req.body.pain_duration,
                medications: req.body.medications,
                dosage: req.body.dosage,
                notes: req.body.notes,
                UserId: "1" /*req.session.id*/

            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.post("/api/journal", function (req, res) {
        console.log(req.body);
        db.Post.create({

                body_part: req.body.body_part,
                pain_intensity: req.body.pain_intensity,
                pain_characteristics: req.body.pain_characteristics,
                pain_duration: req.body.pain_duration,
                medications: req.body.medications,
                dosage: req.body.dosage,
                notes: req.body.notes,
                UserId: "1" /*req.session.id*/

            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });


};