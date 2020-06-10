#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomnumber, deliteli } from './utils.js';
import comparison from '../src/index.js';

const prim = (arr) => { // принимает массив  и возвращает 'no' если елс больше 2 элементов
  if (arr.length - 1 !== 1) {
    return 'no';
  }
  return 'yes';
};

const game_prime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const value = randomnumber(1, 100);
    const game_response = prim(deliteli(value));
    console.log(`Question: ${value}`);
    const user_response = readlineSync.question('Your answer: ');
    if (comparison(game_response, user_response, name) !== 1) {
      return;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
game_prime();
