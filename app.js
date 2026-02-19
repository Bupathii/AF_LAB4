console.log("SE3040 Lab 03 - NodeJS Setup Complete");

const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
 if (err) throw err;
 console.log(data);
});
