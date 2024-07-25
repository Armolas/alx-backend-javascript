const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to the payment system');
});

module.exports = app;
app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});
