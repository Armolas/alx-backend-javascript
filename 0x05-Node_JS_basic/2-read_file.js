const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(`./${path}`, 'utf-8');

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
    console.log(`Number of students: ${numberOfStudents}`);

    for (const field in fieldCount) {
      if (field) {
        console.log(`Number of students in ${field}: ${fieldCount[field].length}. List: ${fieldCount[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load database');
  }
}

module.exports = countStudents;
