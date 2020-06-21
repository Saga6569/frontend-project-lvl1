#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { randomNumber } from './utils.js';

const brainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = () => { // функция проверяет  число  на  четность
  const value = randomNumber(1, 100);
  if ((value % 2 === 0) === true) {
    return ['yes', value];
  }
  return ['no', value];
};

const gameEven = () => {
  gameEngine(brainEven, isEven);
};
gameEven();
