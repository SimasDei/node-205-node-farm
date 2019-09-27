/**
 * @module - Node File System
 */
const hello = 'Ahoy Sailor o/';
const fs = require('fs');

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
const server = http.createServer((req, res) => {
  res.end('Ahoy from the server o/');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server started, captain o/');
});
