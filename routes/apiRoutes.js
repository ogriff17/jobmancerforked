var express = require("express");
module.exports = (app) => {
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


    
    app.post("/users", (req, res) => {
        console.log("Users Received");

    const Users = req.body;
    console.log('User Info: ', req.body);
});

app.put("/users", (req, res) => {
    db.Example.update({
      fullName: req.body.fullName,
      street: req.body.street,
      city: req.body.city,
      ustate: req.body.ustate,
      zip: req.body.zip,
      country: req.body.country,
      email: req.body.email,
      phone: req.body.phone,
      network: req.body.network,
      net_username: req.body.net_username,
      siteurl: req.body.siteurl
    }).then(function (dbExamples) {
      res.json(dbExamples)
    });
  });
};