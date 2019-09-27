/**
 * @module - Node File System
 */
const fs = require('fs');

const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');

const hello = 'Ahoy Sailor o/';
console.log(textInput);
