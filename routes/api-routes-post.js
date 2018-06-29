// Dependencies
// =============================================================

// Requiring the models
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/posts/:id", function (req, res) {
        db.Post.findAll({
                where: {
                    id: req.params.id
                },
                include: [db.User]
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.post("/api/posts", function (req, res) {
        console.log(req.body);
        db.Post.create({

                        bodyPart: bodyPart.val().trim(),
                            painIntensity: painIntensity.val().trim(),
                            painCharactistics: painCharactistics.val().trim(),
                            painDuration: painDuration.val().trim(),
                            medications: medications.val().trim(),
                            dosage: dosage.val().trim(),
                            notes: notes.val().trim(),
                bodyPart: req.body.bodyPart,
                painIntensity: req.body.painIntensity,
                painCharactistics: req.body.painCharactistics,
                
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

};