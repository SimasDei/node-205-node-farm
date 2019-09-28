/**
 * @module - Node File System
 */
const hello = 'Ahoy Sailor o/';
const fs = require('fs');
const url = require('url');

/**
 * @way - Blocking / Synchronous
 */
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
// const textOutput = `Write text to File: ${textInput}.\n Created on: ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOutput);
// console.log(textOutput);

/**
 * @way - Non-Blocking / Asynchronous
 */
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log(`${err} 😭`);
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Files have been writter 🎉');
//       });
//     });
//   });
// });

//////////////////////////////////////////////////

/**
 * @module - Node Http Networking capabilities
 */
const http = require('http');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  /**
   * @module - Url and routing
   */

  const pathName = req.url;
  switch (pathName) {
    case '/overview' || '/':
      res.end('This is the Overview');
      break;
    case '/product':
      res.end('This is Product');
      break;
    case '/api':
      res.writeHead(200, {
        'Content-type': 'application/json',
      });
      res.end(data);
      break;
    default:
      res.writeHead(404, {
        'Content-type': 'text/html',
        'madeup-header': 'ahoySailor o/',
      });
      res.end('<h1>Page not found</h1>');
      break;
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server started, captain o/');
});
