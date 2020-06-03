var Sequelize = require("sequelize");

var sequelize = require("../connections/connection.js")

var Users = sequelize.define("accounts", {
    email: Sequelize.STRING,
    pass: Sequelize.STRING
});

Users.sync();

module.exports = Accounts;