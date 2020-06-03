var Sequelize = require("sequelize");

var sequelize = require("../connections/connection.js");

var Extra = sequelize.define("extra", {
    org: Sequelize.STRING,
    pos: Sequelize.STRING,
    website: Sequelize.STRING,
    strtDate: Sequelize.STRING,
    endDate: Sequelize.STRING
});

Extra.sync();

module.exports = Extra;