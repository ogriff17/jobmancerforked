// ==============================================================================
// DEPENDENCIES
// ==============================================================================
require('dotenv').config();
const express = require('express');
const sendMail = require('./routes/mail');
const path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle DATA PARSING
/*
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
*/

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static('public'));

// ================================================================================
// ROUTER
// ================================================================================

//post
app.post('/email', (req, res) => {
  const { subject, email, text } = req.body;
  console.log('Data: ', req.body);

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: 'Error: 01F4 (internal error)' })
    }
    else {
      res.json({ message: 'Email Sent Successfully' })
    }
  });
});


//get

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/resumeBuilder', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'get-started.html'));
});
// app.get('/resumeBuilder', function(req, res) {
// 	//if (req.session.loggedin) {
//     res.sendFile(path.join(__dirname, 'public', 'get-started.html'));
// 		//res.send('Welcome, ' + req.session.email + '!');
// 	//} else {
// 		//res.send('Please login to view this page!');
// 	//}
// 	//res.end();
// });

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contactpage.html'));
});

app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});
app.get('/mancerpt1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mancerpt1.html'));
});
app.get('/mancerpt2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mancerpt2.html'));
});
app.get('/mancerpt3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mancerpt3.html'));
});




// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
