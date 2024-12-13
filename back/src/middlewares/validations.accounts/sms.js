const express = require('express');
const twilio = require('twilio');
const crypto = require('crypto');
const app = express();
app.use(express.json());

const accountSid = 'your_account_sid'; 
const authToken = 'your_auth_token';   
const client = twilio(accountSid, authToken);

let userOTP = {};

app.post('/send-otp-sms', (req, res) => {
    const phoneNumber = req.body.phoneNumber;

    const otp = crypto.randomInt(100000, 999999).toString();

    userOTP[phoneNumber] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

    client.messages
        .create({
            body: `Votre code OTP est : ${otp}`,
            from: '+21622780702',  
            to: phoneNumber
        })
        .then((message) => {
            res.status(200).json({ message: 'OTP envoyé par SMS' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Erreur d\'envoi du SMS', error });
        });
});
