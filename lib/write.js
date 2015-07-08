'use strict';

var stringify = require('csv-stringify');
var columns = require('../resources/columns');

module.exports = write;

function write() {
  const s = stringify({ delimiter: ';', quoted: true, columns: columns }).on('error', handleError);
  s.pipe(process.stdout).on('error', handleError);
  return s;
}

function handleError(err) {
  console.log(err && err.stack);
}
