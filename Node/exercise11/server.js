const fs = require('fs');

const filePath = 'example.txt';
const fileContent = 'Hello';

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {

    console.error('Error writing to the file:', err);
  } else {

    console.log(`Content has been written.`);
  }
});