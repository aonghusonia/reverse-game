"use strict";
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const reverse = require('./reverse');

reverse([1, 2, 3, 4, 5, 6, 7, 8, 9],
  (numbers, steps) => {
    console.log(numbers, `Done! That took you ${steps} steps!`);
    rl.close();
  },
  (numbers, cb) => rl.question(`${numbers.join(' ')}\nReverse how many? `, cb)
);