#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { randomNumber } from './utils.js';

const brainProgression = 'What number is missing in the progression?';

const progression = () => {
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  const arrprog = [value1];
  const longProgress = 10;
  let gameResponse = 0;
  for (let i = 1; i <= longProgress; i += 1) {
    const numbermax = arrprog[arrprog.length - 1];
    arrprog.push(numbermax + value2);
  }
  const ix = randomNumber(1, 10);
  gameResponse = arrprog[ix];
  arrprog[ix] = '..';
  return [gameResponse, arrprog.join('  ')];
};

const gameProgression = () => {
  gameEngine(brainProgression, progression);
};
gameProgression();
