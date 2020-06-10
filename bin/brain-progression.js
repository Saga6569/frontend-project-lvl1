#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomnumber } from './utils.js';
import comparison from '../src/index.js';

const progression = (x, y) => {
  const arrprog = [x];
  for (let i = 1; i <= 10; i += 1) {
    const numbermax = arrprog[arrprog.length - 1];
    arrprog.push(numbermax + y);
  }
  return arrprog;
};

const game_progression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const progres = progression(randomnumber(1, 100), randomnumber(1, 100));
    const ix = randomnumber(1, 10);
    const game_response = progres[ix];
    progres[ix] = '..';
    console.log(`Question: ${progres}`);
    const user_response = Number(readlineSync.question('Your answer: '));
    if (comparison(game_response, user_response, name) !== 1) {
      return;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
game_progression();
