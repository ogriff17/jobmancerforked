var Sequelize = require("sequelize");

var sequelize = require("../connections/connection.js");

var Certs = sequelize.define("certs", {
    title: Sequelize.STRING,
    certdate: Sequelize.STRING,
    awarder: Sequelize.STRING
});

Certs.sync();

module.exports = Certs;