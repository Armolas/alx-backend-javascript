const { createServer } = require('http');

const hostname = 'localhost';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
module.exports = app;
app.listen(port, hostname);
