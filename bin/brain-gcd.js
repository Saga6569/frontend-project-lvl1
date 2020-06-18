#!/usr/bin/env node

import {  gameEngine, randomNumber } from '../src/index.js';

const brainGcd = 'Find the greatest common divisor of given numbers.';

const matchDividers = () => { // функция верет наибольшуу значение функции delitel и значения
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  const arr1 = numberDividers(value1);
  const arr2 = numberDividers(value2);
  const values = `${value1} ${value2}`;
  const result = [];
  const longarr1 = arr1.length - 1;
  for (let i = 0; i <= longarr1; i += 1) {
    if (arr2.includes(arr1[i]) === true) {
      result.push(arr1[i]);
    }
  }
  return [result[result.length - 1], values];
};

const gameGcd = () => {
  gameEngine(brainGcd, 'gamGcd');
};
gameGcd();

export default matchDividers;