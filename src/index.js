const fs = require('fs');
const path = require('path');
const {URL} = require('url');
const puppeteer = require('puppeteer');

const {parseMarkdown} = require('./markdown');

async function generateManual(fileMd, {
  name = 'Mod',
  version = 'Mod',
  outputPdf = './page.pdf'
} = {}) {
  outputPdf = path.resolve(outputPdf);
  const sourceMd = await _readFile(fileMd);
  const sourceHtml = parseMarkdown(sourceMd);
  const html = await _buildHtmlPage({
    body: sourceHtml,
    name,
    version
  });

  const fileHtml = await _writeFile('./.temp.html', html);
  const {href: urlHtml} = new URL(fileHtml, 'file://');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(urlHtml);
  await page.pdf({path: outputPdf, format: 'A4'});
  await browser.close();
  await _deleteFile(fileHtml);

  console.log(outputPdf);
}

async function _buildHtmlPage(settings) {
  const baseHtmlPath = path.join(__dirname, './base.html');
  const cssPath = path.join(__dirname, './style.css');
  const baseHtml = await _readFile(baseHtmlPath);

  return baseHtml
    .replace('{{base_style}}', cssPath)
    .replace('{{body}}', settings.body)
    .replace('{{version}}', settings.version)
    .replace('{{name}}', settings.name);
}

async function _deleteFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, err => {
      if (err) return reject(err);
      return resolve();
    });
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

  _buildHtmlPage,
  _deleteFile,
  _readFile,
  _writeFile
};
