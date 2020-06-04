







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
};