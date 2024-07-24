#!/usr/bin/node
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const path = process.argv[2] || 'database.csv';
      const data = await readDatabase(path);
      response.status(200);
      const res = [];
      res.push('This is the list of our students');
      const keys = Object.keys(data);
      keys.sort();
      for (const field of keys) {
        res.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      }
      response.send(res.join('\n'));
    } catch (error) {
      response.status(500);
      response.send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major === 'CS' || major === 'SWE') {
      try {
        const path = process.argv[2] || 'database.csv';
        const data = await readDatabase(path);
        response.status(200);
        response.send(`List: ${data[major].join(', ')}`);
      } catch (error) {
        response.status(500);
        response.send('Cannot load the database');
      }
    } else {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
