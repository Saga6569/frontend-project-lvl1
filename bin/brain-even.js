#!/usr/bin/env node

import { gameEngine, randomNumber } from '../src/index.js';

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

export default isEven;