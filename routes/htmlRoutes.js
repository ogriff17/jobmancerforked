var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
























// var express = require("express");
// module.exports = (app) => {

//     app.get('/', (req, res) => {
//         res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     });
//     app.get('/home', (req, res) => {
//         res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     });

//     app.get('/resumeBuilder', (req, res) => {
//         res.sendFile(path.join(__dirname, 'public', 'get-started.html'));
//     });
//     // app.get('/resumeBuilder', function(req, res) {
//     // 	//if (req.session.loggedin) {
//     //     res.sendFile(path.join(__dirname, 'public', 'get-started.html'));
//     // 		//res.send('Welcome, ' + req.session.email + '!');
//     // 	//} else {
//     // 		//res.send('Please login to view this page!');
//     // 	//}
//     // 	//res.end();
//     // });

//     app.get('/contact', (req, res) => {
//         res.redirect("/contact")
//     });


//     app.get('/mancerpt1', (req, res) => {
//         res.redirect("/mancerpt1")
//     });
//     app.get('/mancerpt2', (req, res) => {
//         res.redirect("/mancerpt2")
//     });
// };