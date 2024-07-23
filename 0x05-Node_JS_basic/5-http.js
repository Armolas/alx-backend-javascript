const { createServer } = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;

const app = createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await fs.promises.readFile(`./${process.argv[2]}`, 'utf-8');
      const lines = data.split('\n').filter((line) => line !== '');
      lines.shift();
      const fieldCount = {};
      for (const line of lines) {
        const [firstname, , , field] = line.split(',');
        if (!fieldCount[field]) {
          fieldCount[field] = [];
        }
        fieldCount[field].push(firstname);
      }

      const numberOfStudents = lines.length;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      let response = 'This is the list of our students\n';
      response += `Number of students: ${numberOfStudents}\n`;
      for (const field in fieldCount) {
        if (field) {
          response += `Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}\n`;
        }
      }
			res.end(response);
    } catch (error) {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 500;
      res.end('Cannot load database');
    }
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
});

module.exports = app;
app.listen(port, hostname);
