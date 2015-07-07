'use strict';

var stringify = require('csv-stringify');
var columns = require('../resources/columns');

module.exports = write;

function write() {
  const s = stringify({ delimiter: ';', columns: columns }).on('err', handleError);
  s.pipe(process.stdout);
  return s;
}

function handleError(err) {
  console.log(err);
}
