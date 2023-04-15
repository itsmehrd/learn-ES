const fs = require('fs');

fs.writeFile('hw.txt', 'Hello world!', (err) =>
  err ? console.log(err) : console.log('Succesfully created file')
);

fs.readFile('harish.txt', (err, data) =>
  err ? console.log(err) : console.log(data.toString())
);
