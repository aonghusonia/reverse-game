"use strict";

const rl = require('readline-sync');

const swap = (ar, i, j) => i === j
    ? ar
    : [...ar.slice(0, i), ar[j], ...ar.slice(i + 1, j), ar[i], ...ar.slice(j + 1)];

const randInt = max => Math.floor(Math.random() * (max + 1));

const shuffle = ar => ar.reduceRight((pv, _, i) => swap(pv, randInt(i), i), ar);

const flip = (ar, n) => ar.slice(0, n).reverse().concat(ar.slice(n, ar.length));

const reverse = (goal, numbers = shuffle(goal), step = 0) =>
  JSON.stringify(numbers) === JSON.stringify(goal)
  ? console.log(`Done! That took you ${step} steps!`)
  : reverse(goal,
    flip(numbers, rl.question(`${numbers.join(' ')}\nReverse how many? `)),
    step + 1);

reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]);

