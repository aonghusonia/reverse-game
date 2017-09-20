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