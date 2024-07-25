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

module.exports = app;
app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});
