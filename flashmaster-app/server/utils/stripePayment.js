const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripeRouter = require('./stripe');

const app = express();
app.use('/create-checkout-session', stripeRouter);

// Parse JSON bodies
app.use(bodyParser.json());

app.post('/charge', async (req, res) => {
  try {
    const { amount, token } = req.body;

    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      source: token.id,
    });

    res.status(200).send('Payment Successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Payment Failed');
  }
});

module.exports = app;
