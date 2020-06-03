var Express = require("express");

var Router = express.Router();

var acc = require("../models/accounts");

Router.post('/auth', function (request, response) {
    var emaila = request.body.email;
    var passworda = request.body.password;
    if (email && password) {
      acc.fetchPasswordForUser(email, password, function (results) {
        if (results.length > 0) {
          request.session.email = emaila;
          request.session.password = passworda;
          response.redirect('/');
        } else {
          response.send('Incorrect Email and/or Password!');
        }
        response.end();
      });
    } 
    else {
      response.send('Please enter Email and Password!');
      response.end();
    }
  });
  
  Router.post('/signinauth', function (request, response) {
    var email = request.body.email;
    var password = request.body.password;
    if (email && password) {
      acc.createAccount(email, password, function (results) {
        if (results.length > 0) {
          request.session.email = email;
          request.session.password = password;
          response.redirect('/login');
        } else {
          response.send('Invalid Email and/or Password!');
        }
        response.end();
      });
    } 
    else {
      response.send('Please enter a valid Email and Password!');
      response.end();
    }
  });


Router.get("/", function(req, res) {
    res.redirect("/login")
})

