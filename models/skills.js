var Sequelize = require("sequelize");

var sequelize = require("../connections/connection.js");

var Skills = sequelize.define("skills", {
    skillName: Sequelize.STRING,
    skilllevel: Sequelize.STRING,
    keywords: Sequelize.STRING
});

Skills.synce();

module.exports = Skills;