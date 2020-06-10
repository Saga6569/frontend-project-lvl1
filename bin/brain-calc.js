#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomnumber } from './utils.js';
import comparison from '../src/index.js';

const game_calc = () => { // функция принимает 2 числа  и возвращает массив : результат и строку
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log('What is the result of the expression?');
  const str = '*-+';
  const strmax = str.length - 1;
  let game_response = 0;
  for (let counter = 1; counter <= 3; counter += 1) {
    const i = randomnumber(0, strmax);
    const x = randomnumber(1, 100);
    const y = randomnumber(1, 100);
    if (str[i] === '*') {
      game_response = x * y;
      console.log(`${x} * ${y}`);
    } else if (str[i] === '+') {
      game_response = x + y;
      console.log(`${x} + ${y}`);
    } else if (str[i] === '-') {
      game_response = x - y;
      console.log(`${x} - ${y}`);
    }
    const user_response = Number((readlineSync.question('Your answer: ')));
    if (comparison(game_response, user_response, name) !== 1) {
      return;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
game_calc();
