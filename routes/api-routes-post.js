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

    app.get("/api/add-new/:id", function (req, res) {
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

    app.get("/api/chart/:id", function(req, res) {
        db.User.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.get("/api/calendar/:id", function (req, res) {
        db.User.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });


    app.post("/api/dashboard", function (req, res) {
        console.log("tell us what this session is:", req.session);
        db.Post.create({

                body_part: req.body.body_part,
                pain_intensity: req.body.pain_intensity,
                pain_characteristics: req.body.pain_characteristics,
                pain_duration: req.body.pain_duration,
                medications: req.body.medications,
                dosage: req.body.dosage,
                notes: req.body.notes,
                UserId: req.session.user

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
                UserId: req.session.user

            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.post("/api/add-new", function (req, res) {
        console.log(req.body);
        db.Post.create({

                body_part: req.body.body_part,
                pain_intensity: req.body.pain_intensity,
                pain_characteristics: req.body.pain_characteristics,
                pain_duration: req.body.pain_duration,
                medications: req.body.medications,
                dosage: req.body.dosage,
                notes: req.body.notes,
                UserId: req.session.user

            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });


    app.delete("/api/journal/:id", function (req, res) {

        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });

    });


    app.put("/api/journal", function (req, res) {

        db.Post.update({
            body_part: req.body.body_part,
            pain_intensity: req.body.pain_intensity,
            pain_characteristics: req.body.pain_characteristics,
            pain_duration: req.body.pain_duration,
            medications: req.body.medications,
            dosage: req.body.dosage,
            notes: req.body.notes,
            UserId: req.session.user
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });
    

};