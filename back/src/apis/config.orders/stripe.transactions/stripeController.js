const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

dotenv.config();

const app = express();
app.use(bodyParser.json());
//// this code juste for test API stripe
// Serve HTML form (optional)
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});
//STRIPE_SECRET_KEY= stripe keys
//STRIPE_PUBLIC_KEY=your_stripe_public_key
app.post('/create-payment-intent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1000, 
            currency: 'usd',
            payment_method_types: ['card'],
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Lancer le serveur
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
