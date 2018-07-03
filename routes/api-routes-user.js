const randtoken = require("rand-token");
const db = require("../models");
const session = require("express-session");

// const encrypt = require("./crypt/encryption.js");

module.exports = function(app) {

    app.post('/', function (req, res) {
        var token = randtoken.generate(10);

        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            dob: req.body.dob,
            gender: req.body.gender,
            token: token
        }).then(function (dbUser) {
            res.cookie("token", token);
            res.json(dbUser);
        }).catch(function (error) {
            console.log(error);
            res.send({
                "code": 400,
                "failed": "Error occurred!"
            });
        });
    });

    app.post('/', function (req, res) {
        console.log(req.session);

        var token = randtoken.generate(10);

        db.User.update({
            token: token
        }, {
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(function(result) {
            console.log(result);
            if (!result) {
                res.send("Log-in failure!");
            } else {
                // console.log("result", result.id);
                // req.session.id = result.id
                res.cookie("token", token);
                res.send("Log-in success!");
            };
        }).catch(function(error) {
            res.send(error);
        });
    });
}