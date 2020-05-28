#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomnumber, deliteli } from '/home/dima/hexlet/frontend-project-lvl1/src/repetitive functions.js';

const prim = (arr) => {     // принимает массив  и возвращает 'no' если елс больше 2 элементов 
  if (arr.length - 1 !== 1) {
    return 'no';
  }
  return 'yes';
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const value = randomnumber(1, 100);
    const answer = prim(deliteli(value));
    console.log(`Question: ${value}`);
    const result = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      return console.log(`"${result}" is wrong answer ;(. Correct answer was "${answer}" .\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
game();
