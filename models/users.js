var Sequelize = require("sequelize");

var sequelize = require("../connections/connection.js")

var Users = sequelize.define("users", {
    users_name: Sequelize.STRING,
    job_title: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    country: Sequelize.STRING,
    ustate: Sequelize.STRING,
    city: Sequelize.STRING,
    zip: Sequelize.INTEGER
});

Users.sync();

module.exports = Users;