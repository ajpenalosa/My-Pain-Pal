// Dependencies
// =============================================================

// Requiring the models
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {
    
    app.get("/api/posts/:id", function(req, res){
        db.Post.findAll({
            where: {
                id: req.params.id
            },
            include: [db.User]
        })
        .then(function(dbPost){
            res.json(dbPost);
        });
    });

};