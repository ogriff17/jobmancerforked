var Express = require("express");

var Router = express.Router();

var Users = require("../models/users.js");

Router.get("/", function(req, res) {
    res.redirect("/mancerpt1")
})