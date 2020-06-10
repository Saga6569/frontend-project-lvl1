#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomnumber } from './utils.js';
import comparison from '../src/index.js';
const is_even = (x) => { // функция проверяет  число  на  четность
  if (x % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game_even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 1; i <= 3; i += 1) {
    const value = randomnumber(1, 100);
    const game_response = is_even(value);
    console.log(`Question: ${value}`);
    const user_response = readlineSync.question('Your answer: ');
    if (comparison(game_response, user_response, name) !== 1) {
      return;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
game_even();
