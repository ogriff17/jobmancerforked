
var Sequelize = require("sequelize");
var sequelize = require("../connections/connections");

var Users = sequelize.define("accounts", {
    email: Sequelize.STRING,
    pass: Sequelize.STRING
});

Users.sync();


var acc = {
    fetchPasswordForUser: function (email, password, cb) {
        var queryString = "SELECT * FROM accounts where email = ? AND pass = ?";
        connection.query(queryString, [email, password], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },

    createAccount: function (email, password, cb) {
        var queryString = "INSERT INTO accounts where email = ? AND pass = ? AND";
        connection.query(queryString, [email, password], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },
    
};



module.exports = orm;

module.exports = Accounts;