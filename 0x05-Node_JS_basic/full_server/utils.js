const fs = require('fs');

async function readDatabase(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line !== '');

    lines.shift();
    const fields = {};
    for (const line of lines) {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
    return fields;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = readDatabase;
