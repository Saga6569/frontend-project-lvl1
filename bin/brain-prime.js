#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { randomNumber, numberDividers } from './utils.js';

const brainPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const IsPrimeNumber = () => { // принимает массив  и возвращает 'no' если елс больше 2 элементов
  const value = randomNumber(1, 100);
  const arr = numberDividers(value);
  if ((arr.length - 1 !== 1) === true) {
    return ['no', value];
  }
  return ['yes', value];
};

const gamePrime = () => {
  gameEngine(brainPrime, IsPrimeNumber);
};
gamePrime();
