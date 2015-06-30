'use strict';

var es = require('event-stream');
var combine = require('stream-combiner');
var sort = require('sort-stream');
var counter = require('./counter');

var countStream = function() {
  var count = counter();

  var read = function(val) {
    count(val);
  };

  var end = function() {
    var props = Object.keys(count.counts);

    props
      .map(function(prop) {
        return [JSON.parse(prop), count.counts[prop]];
      })
      .forEach(this.push);

    this.push(null);
  };

  var comparator = function(a, b) {
    return b[1] - a[1];
  };

  return combine(es.through(read, end), sort(comparator));
};

module.exports = countStream;
