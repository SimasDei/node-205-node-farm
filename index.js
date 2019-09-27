const hello = 'Ahoy Sailor o/';
/**
 * @module - Node File System
 */
const fs = require('fs');

/**
 * @way - Blocking / Synchronous
 */
const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
const textOutput = `Write text to File: ${textInput}.\n Created on: ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOutput);
console.log(textOutput);

/**
 * @way - Non-Blocking / Asynchronous
 */
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
      console.log(data3);

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
        console.log('Files have been writter');
      });
    });
  });
});
