(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const reverse = require('./reverse');

const message = document.getElementById('message');
const buttons = document.getElementById('numbers');

const render = (numbers, cb) => {
  buttons.replaceChild(
    numbers.reduce((parent, n, i) => {
        const num = document.createElement('button');
        num.appendChild(document.createTextNode(n));
        num.addEventListener('click', cb.bind(null, i + 1));
        parent.appendChild(num);
        return parent;
      },
      document.createElement('div')), buttons.firstChild);
};

const  win = (numbers, steps) => {
  render(numbers, play);
  message.textContent = `Done! That took you ${steps} steps!`;
};

const play = () => {
  message.textContent = 'Reverse at?';
  reverse([1, 2, 3, 4, 5, 6, 7, 8, 9],
    win,
    render);
};

play();
},{"./reverse":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
