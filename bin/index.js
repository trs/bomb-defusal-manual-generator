#!/usr/bin/env node

const program = require('commander');
const {version} = require('../package.json');
const {generateManual} = require('../src');

program
  .version(version)
  .arguments('<inputMd>')
  .option('-n, --name <name>', 'Set mod name')
  .option('-v, --ver <version>', 'Set mod page version')
  .option('-o, --output <outputPdf>', 'Specify output file')
  .action(function (inputMd, env) {
    generateManual(inputMd, {
      name: env.name,
      version: env.ver,
      outputPdf: env.output
    });
  })
  .parse(process.argv);
