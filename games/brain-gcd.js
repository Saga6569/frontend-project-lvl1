#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomnumber, deliteli } from '/home/dima/hexlet/frontend-project-lvl1/src/repetitive functions.js';

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

const gamegcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    const value1 = randomnumber(1, 100);
    const value2 = randomnumber(1, 100);
    console.log(value1, value2);
    const result = readlineSync.question('Your answer: ');
    const answer = coincidences(deliteli(value1), deliteli(value2));
    if (Number(result) === answer) {
      console.log('Correct!');
    } else {
      return console.log(`"${result}" is wrong answer ;(. Correct answer was "${answer}" .\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
gamegcd();
