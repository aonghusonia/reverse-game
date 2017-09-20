"use strict";

const swap = (ar, i, j) => i === j ?
  ar : [...ar.slice(0, i), ar[j], ...ar.slice(i + 1, j), ar[i], ...ar.slice(j + 1)];

const randInt = max => Math.floor(Math.random() * (max + 1));

const shuffle = ar => ar.reduceRight((pv, _, i) => swap(pv, randInt(i), i), ar);

const flip = (ar, n) => ar.slice(0, n).reverse().concat(ar.slice(n, ar.length));

const eq = (ar1, ar2) => ar1.every((v, i) => v === ar2[i]);

module.exports = (goal, done, cb) =>
  (function reverse(numbers = shuffle(goal), step = 0) {
    eq(numbers, goal) ?
      done(numbers, step) :
      cb(numbers, n => reverse(flip(numbers, n), step + 1));
  }());
