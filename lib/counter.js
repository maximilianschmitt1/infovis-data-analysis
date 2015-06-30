'use strict';

var counter = function() {
  var count = function(prop) {
    prop = JSON.stringify(prop);
    count.counts[prop] = (count.counts[prop] || 0) + 1;
  };

  count.counts = {};

  return count;
};

module.exports = counter;
