#!/usr/bin/env node

import { gameEngine, randomNumber } from '../src/index.js';

const brainCalc = 'What is the result of the expression?';

const calc = () => {
  let gameResponse = 0;
  let messeg = '';
  const str = '*-+';
  const i = randomNumber(0, 2);
  const x = randomNumber(1, 100);
  const y = randomNumber(1, 100);
  if (str[i] === '*') {
    messeg += (`${x} * ${y}`);
    gameResponse = x * y;
  } else if (str[i] === '+') {
    messeg += (`${x} + ${y}`);
    gameResponse = x + y;
  } else if (str[i] === '-') {
    messeg += (`${x} - ${y}`);
    gameResponse = x - y;
  }
  return [gameResponse, messeg];
};

export default calc;

const gameCalc = () => {
  gameEngine(brainCalc, calc);
};
gameCalc();

