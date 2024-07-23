#!/usr/bin/node
const express = require('express');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
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
    const response = [];
    response.push('This is the list of our students');
    response.push(`Number of students: ${numberOfStudents}`);
    for (const field in fieldCount) {
      if (field) {
        response.push(`Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}`);
      }
    }
    res.send(response.join('\n'));
  } catch (error) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

module.exports = app;
app.listen(port, hostname);
