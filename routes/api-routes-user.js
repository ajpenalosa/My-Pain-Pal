const randtoken = require("rand-token");
const db = require("../models");
const encrypt = require("./crypt/encryption.js");

module.exports = function(app) {

    app.get("/api/getid/", function (req,res){
        res.send(req.session);
    })

    app.post('/register', function (req, res) {
        let token = randtoken.generate(10);

        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(result) {
            if (!result) {
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
                    "code": 304,
                    "failed": "Email address is in use! Please revise your input."
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
            let token = randtoken.generate(10);
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
                    "code": 504,
                    "failed": "Account not found! Please revise your credentials."
                });
            };
        });
    });

    app.get('/', (req, res) => {
        if (req.session.user) {
            res.send(`${req.session.user.first_name} is currently logged in.`);
        } else {
            return res.redirect('/');
        };
    });

    app.get('/body', (req, res) => {
        if (req.session.user) {
            res.send(`${req.session.user.first_name} is currently logged in.`);
        } else {
            return res.redirect('/');
        };
    });

    app.get('/calendar', (req, res) => {
        if (req.session.user) {
            res.send(`${req.session.user.first_name} is currently logged in.`);
        } else {
            return res.redirect('/');
        };
    });

    app.get('/chart', (req, res) => {
        if (req.session.user) {
            res.send(`${req.session.user.first_name} is currently logged in.`);
        } else {
            return res.redirect('/');
        };
    });

    app.get('/dashboard', (req, res) => {
        if (req.session.user) {
            res.send(`${req.session.user.first_name} is currently logged in.`);
        } else {
            return res.redirect('/');
        };
    });

    app.get('/index', (req, res) => {
        if (req.session.user) {
            res.send(`${req.session.user.first_name} is currently logged in.`);
        } else {
            return res.redirect('/');
        };
    });

    app.get('/journal', (req, res) => {
        if (req.session.user) {
            res.send(`${req.session.user.first_name} is currently logged in.`);
        } else {
            return res.redirect('/');
        };
    });

    app.get('/post', (req, res) => {
        if (req.session.user) {
            res.send(`${req.session.user.first_name} is currently logged in.`);
        } else {
            return res.redirect('/');
        };
    });

    app.get('/add-new', (req, res) => {
        if (req.session.user) {
            res.send(`${req.session.user.first_name} is currently logged in.`);
        } else {
            return res.redirect('/');
        };
    });

    app.get('/', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });
    
    app.get('/body', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });

    app.get('/calendar', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });

    app.get('/chart', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });

    app.get('/dashboard', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });

    app.get('/index', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });

    app.get('/journal', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });

    app.get('/post', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });

    app.get('/add-new', (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.end();
    });

};