var bodyParser = require("body-parser");
var session = require("express-session");
var db = require("../models");
const encrypt = require("./crypt/encryption.js");

module.exports = function (app) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    app.get('/new-user', (req, res => {
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            dob: req.body.dob,
            gender: req.body.gender,
            token: req.body.token
            
            // After a new user account is created, user will be prompted to log-in with their newly created credentials

        }).then(dbUser => {
            
            app.use(session({
                secret: "whateverwewant",
                resave: false,
                saveUninitialized: true,
                cookie: { secure: "auto", maxAge: 99999 }
            }));

            app.get('/welcome', (req, res => {
                if (req.session.user) {
                    res.send(`Welcome back, ${req.session.user.first_name}.`);
                } else if (req.cookie) {
                    for (var i = 0; i < dbUser.length; i++) {
                        if (dbUser[i].token === req.cookie.token) {
                            req.session.user = dbUser[i];
                            return res.redirect('/new-user');
                        }
                    }
                } else {
                    res.send(`
                        <form method='POST' action='/login'>
                            <input type='text' name='username' />
                            <input type='password' name='password' />
                            <input type='submit' value='Submit' />
                        </form>
                    `);
                }
            }));

            app.get('/login', (req, res => {
                db.User.findAll(
                ).then(dbUser => {
                    app.post('/login', (req, res => {
                        for (var i = 0; i < dbUser.length; i++) {
                            var dbPassword = dbUser[i].password;
                            var deCryptPw = encrypt.decrypt(dbPassword);

                            if (dbUser[i].email === req.body.email && deCryptPw === req.body.password) {
                                var token = 't' + Math.random();
                                dbUser[i].token = token;

                                res.cookie('token', token);
                                req.session.user = dbUser[i];

                                return res.direct('/');
                            } else {
                                return res.send("Account not found!");
                            };
                        };
                    }));
                });
            }));
        });
    }));

    app.get('/other', (req, res => {
        if (req.session.user) {
            res.send('Welcome back, ${req.session.user.first_name}!');
        } else {
            res.redirect('/');
        };
    }));

    app.get('/logout', (req, res => {
        res.clearCookie('token');
        req.session.destroy();
        res.redirect('/');
    }))
}