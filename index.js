const hello = 'Ahoy Sailor o/';

/**
 * @module - Node File System
 */
const fs = require('fs');

const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require(`${__dirname}/modules/replaceTemplate`);

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

/**
 * @data - Get product data
 */
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
console.log(slugs);

/**
 * @templates - Overview, Card, Product
 */
const tempOverview = fs.readFileSync(`${__dirname}/templates/template.overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template.card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template.product.html`, 'utf-8');

const server = http.createServer((req, res) => {
  /**
   * @module - Url and routing
   */
  const { query, pathname } = url.parse(req.url, true);
  let output;
  const cardsHtml = dataObj.map(product => replaceTemplate(tempCard, product)).join('');
  switch (pathname) {
    case '/':
      res.writeHead(200, { 'Content-type': 'text/html' });
      output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
      res.end(output);
      break;
    case '/overview':
      res.writeHead(200, { 'Content-type': 'text/html' });
      output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
      res.end(output);
      break;
    case '/product':
      const product = dataObj[query.id];
      output = replaceTemplate(tempProduct, product);
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(output);
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

const PORT = 8000;

server.listen(PORT, '127.0.0.1', () => {
  console.log(`${hello} runnin' on http://localhost:${PORT}`);
});
