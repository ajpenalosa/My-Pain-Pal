// Dependencies
// =============================================================

// Requiring the models
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/posts/:id", function (req, res) {
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

    app.post("/api/posts", function (req, res) {
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


    // app.get("/api/posts/user/:user", function (req, res) {
    //     db.Post.findAll({
    //             where: {
    //                 userId: req.params.user
    //             }
    //         })
    //         .then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });


    // app.get("/api/posts/:id", function (req, res) {
    //     db.Post.findOne({
    //             where: {
    //                 userId: req.params.id
    //             }
    //         })
    //         .then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });


    // app.post("/api/posts", function (req, res) {
    //     console.log(req.body);
    //     db.Post.create({
    //             body_part: req.body.body_part,
    //             pain_intensity: req.body.pain_intensity,
    //             pain_characteristics: req.body.pain_characteristics,
    //             pain_duration: req.body.pain_duration,
    //             medications: req.body.medications,
    //             dosage: req.body.dosage,
    //             notes: req.body.notes
    //         })
    //         .then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });




    // app.delete("/api/posts/:id", function (req, res) {
    //     db.Post.destroy({
    //             where: {
    //                 id: req.params.id
    //             }
    //         })
    //         .then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });




    // app.put("/api/posts", function (req, res) {
    //     db.Post.update(req.body, {
    //             where: {
    //                 id: req.body.id
    //             }
    //         })
    //         .then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });











};