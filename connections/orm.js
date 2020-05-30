//this is the starter file for the orm.js
var connection = require('./connections/connections')

var orm = {
    fetchPasswordForUser: function(email, password){
        var queryString = "SELECT * FROM accounts where email = ? AND password = ? AND"
        connection.query(queryString, [email, password], function (err, result) {
            if (err){
                throw err;
            }
            cb(result)
        });
    },
};

module.export = orm;