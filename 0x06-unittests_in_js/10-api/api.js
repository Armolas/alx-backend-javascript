const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!isNaN(id)) {
    res.status(200);
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404);
    res.send('payment id must be a number');
  }
});

app.get('/available_payments', (req, res) => {
  const payments = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.status(200);
  res.send(payments);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200);
  res.send(`Welcome ${userName}`);
});

module.exports = app;
app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});
