var db = require("../models");
var express = require("express");
module.exports = (app) => {
    //post
    app.post('/email', (req, res) => {
        const { subject, email, text } = req.body;
        console.log('Data: ', req.body);

        sendMail(email, subject, text, function (err, data) {
            if (err) {
                res.status(500).json({ message: 'Error: 01F4 (internal error)' })
            }
            else {
                res.json({ message: 'Email Sent Successfully' })
            }
        });
    });

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });


  // Get all examples
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};