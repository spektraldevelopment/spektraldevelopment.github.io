const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require("cors")({
    origin: true
});

exports.submit = functions.https.onRequest((req, res) => {
    const {
        name,
        email,
        subject,
        message
    } = req.body;
    
    return cors(req, res, () => {

        if (req.method !== 'POST') {
            return;
        }

        var text = `<div>
      <h4>Client Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
          Subject - ${subject || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${message || ""}</p>
    </div>`;
        var sesAccessKey = functions.config().gmail.email;
        var sesSecretKey = functions.config().gmail.password;

        var transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            auth: {
                user: sesAccessKey,
                pass: sesSecretKey
            }
        }));
        const mailOptions = {
            to: "spektraldevelopment@gmail.com",
            from: `${email}`,
            subject: `${name} sent you a new message`,
            text: text,
            html: text
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error.message);
                res.status(500).send("error");
            }
            res.status(200).send({
                message: "success"
            })
        });
    })
});