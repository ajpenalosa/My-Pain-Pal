// Dependencies
// =============================================================

// Requiring the models
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {
    
    app.get("/api/posts/", function(req, res){
        db.Post.findAll({})
        .then(function(dbPost){
            res.json(dbPost);
        });
    });
};