const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const underline = require('markdown-it-underline');
const markdown = require('markdown-it')().use(underline);
const puppeteer = require('puppeteer');

async function generateManual(fileMd, {
  outputPdf = './page.pdf'
} = {}) {
  const sourceMd = await _readFile(fileMd);
  const sourceHtml = markdown.render(sourceMd);
  const html = _buildHtmlPage(sourceHtml, {
    html: true,
    xhtmlOut: true,
    breaks: true
  });
  const fileHtml = await _writeFile('./.temp.html', html);
  const urlHtml = new URL(fileHtml, 'file://');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(urlHtml.href);

  await page.pdf({path: outputPdf, format: 'A4'});
  return Promise.all([ 
    browser.close(),
    // _deleteFile(fileHtml)
  ]);
}

function _buildHtmlPage(body) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="./src/style.css">
    </head>
    <body>
      ${body}
    </body>
  </html>
  `;
}

async function _deleteFile(path) {
  return new Promise((resolve, reject) => {
    fs.unlink(path, err => {
      if (err) return reject(err);
      return resolve();
    })
  });
}

async function _readFile(inFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(inFile, 'utf8', (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

async function _writeFile(outFile, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(outFile, text, err => {
      if (err) return reject(err);
      const filePath = path.resolve(outFile);
      return resolve(filePath);
    });
  });
}

module.exports = {
  generateManual,

  _readFile
};
