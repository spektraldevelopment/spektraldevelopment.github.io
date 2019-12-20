'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({
    origin: true
});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    rejectUnauthorized: false,
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});
exports.submit = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req.method !== 'POST') {
            return;
        }
        const mailOptions = {
            from: req.body.email, // sender address
            to: gmailEmail, // list of receivers
            replyTo: req.body.email,
            subject: `ATTN: ${req.body.name} - ${req.body.subject}`, // Subject line
            html: `<p>${req.body.message}</p>` // plain text body
        };

        mailTransport.sendMail(mailOptions)
            .then(success => {
                return res.status(200).send({
                    isEmailSend: true
                });
            })
            .catch(error => {
                console.log('error: ', error)
                return res.status(500).send({
                    isEmailSend: false
                });
            })
    });
});