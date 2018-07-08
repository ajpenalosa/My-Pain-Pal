const randtoken = require("rand-token");
const db = require("../models");
const encrypt = require("./crypt/encryption.js");

module.exports = function(app) {

    app.get("/api/users/:id", function (req, res) {
        db.User.findOne({
                where: {
                    id: req.params.id
                },
            attributes: ["first_name", "last_name", "email", "gender"]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/getid/", function (req,res){
        res.send(req.session);
    });

    app.post('/register', function (req, res) {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(result) {
            let token = randtoken.generate(16);

            if (!result || result.email !== req.body.email) {
                let encryptPw = encrypt.encrypt(req.body.password);

                db.User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: encryptPw,
                    dob: req.body.dob,
                    gender: req.body.gender,
                    token: token
                }).then(function (dbUser) {
                    res.cookie("token", token);
                    req.session.user = dbUser.id;
                    res.json(dbUser);
                });
            } else {
                res.send({
                    "code": 304
                });
            };
        });
    });

    app.post('/login', function (req, res) {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(result) {
            if (!result) {
                res.send({
                    "code": 505
                });
            } else {
                let token = randtoken.generate(16);
                let dbPassword = result.password;
                let decryptPw = encrypt.decrypt(dbPassword);

                if (result.email === req.body.email && decryptPw === req.body.password) {
                    db.User.update({ token: token }, {
                        where: {
                            email: req.body.email
                        }
                    }).then(function (data) {
                        if (!data) {
                            res.send("Log-in failure!");
                        } else {
                            res.cookie("token", token);
                            req.session.user = result.id;
                            res.send("Log-in success!");
                        };
                    }).catch(function (error) {
                        res.send(error);
                    });
                } else {
                    res.send({
                        "code": 504
                    });
                };
            };
        });
    });

    app.get('/logout', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });

};