'use strict';

var parseCsv = require('csv-parse');
var JSONStream = require('JSONStream');
var columns = require('../resources/columns');
var csvParser = parseCsv({ delimiter: ';', columns: columns });

module.exports = read;

function read(stream, handleOut) {
  if (handleOut === false) {
    return process.stdin.pipe(csvParser).pipe(stream);
  }

  process.stdin.pipe(csvParser).pipe(stream).pipe(JSONStream.stringify()).pipe(process.stdout).on('err', handleError);
}

function handleError(err) {
  console.log(err);
}
