const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

let userOTP = {};

app.post('/send-otp', (req, res) => {
    const email = req.body.email;

    const otp = crypto.randomInt(100000, 999999).toString();

    userOTP[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Votre code OTP',
        text: `Votre code OTP est : ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Erreur d\'envoi de l\'email' });
        }
        res.status(200).json({ message: 'OTP envoyé' });
    });
});
