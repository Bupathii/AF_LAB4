console.log("SE3040 Lab 03 - NodeJS Setup Complete");

const fs = require('fs');
const http = require('http');
const https = require('https');

fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) {
        console.log("file.txt not found");
    } else {
        console.log("Read File Content:", data);
    }
});

fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('File saved!');
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

console.log("Server running at http://localhost:8080");

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        console.log("API Response:", JSON.parse(data));
    });

}).on('error', (err) => {
    console.log("Error: " + err.message);
});

const myModule = require('./my-module.js');
console.log(myModule.myFunction());

const condition = true;

const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

async function myFunction() {
    try {
        const result = await myPromise;
        console.log("Async Result:", result);
    } catch (error) {
        console.log(error);
    }
}

myFunction();
