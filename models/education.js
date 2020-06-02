var Sequelize = require("sequelize");

var sequelize = require("../connections/connection.js");

var Education = sequelize.define("education", {
    instiution: Sequelize.STRING,
    field: Sequelize.STRING,
    strtDate: Sequelize.STRING,
    gpa: Sequelize.INTEGER,
    endDate: Sequelize.STRING
});

Education.sync();

module.exports = Education;

