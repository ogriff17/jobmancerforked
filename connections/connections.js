require('dotenv').config();
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	port: 3306,
	user: "ko3cikjrtrhgt5pk",
	password: process.env.PASS,
	database: "zzmb7cc7fazm5iny"
  });

connection.connect(function(err){
	if(err){
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;


//add to orms.js
//INSERT INTO accounts (id, username, pass, email) VALUES (1, `test`, `test`, `test@test.com`);
