#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { randomNumber } from './utils.js';

const brainCalc = 'What is the result of the expression?';

const calculator = () => {
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

const gameCalc = () => {
  gameEngine(brainCalc, calculator);
};
gameCalc();
