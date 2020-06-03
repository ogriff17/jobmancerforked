var Express = require("express");

var Router = express.Router();

var Accounts = require("../models/accounts");

Router.get("/", function(req, res) {
    res.redirect("/login")
})