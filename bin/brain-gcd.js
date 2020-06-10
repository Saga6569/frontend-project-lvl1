#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomnumber, deliteli } from './utils.js';
import comparison from '../src/index.js';
const coincidences = (arr1, arr2) => { // принимает 2 массива и возвращает наибольшее совпадение
  const result = [];
  const longarr1 = arr1.length - 1;
  for (let i = 0; i <= longarr1; i += 1) {
    if (arr2.includes(arr1[i]) === true) {
      result.push(arr1[i]);
    }
  }
  return result[result.length - 1];
};

const game_gcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const value1 = randomnumber(1, 100);
    const value2 = randomnumber(1, 100);
    console.log(value1, value2);
    const result = Number(readlineSync.question('Your answer: '));
    const answer = coincidences(deliteli(value1), deliteli(value2));
    if (comparison(answer, result, name) !== 1) {
      return;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
game_gcd();
