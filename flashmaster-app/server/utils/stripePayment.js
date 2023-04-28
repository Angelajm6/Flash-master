const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
