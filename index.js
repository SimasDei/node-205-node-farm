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
fs.readFile('./txt/start.txt');
