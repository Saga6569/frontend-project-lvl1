#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomnumber } from '/home/dima/hexlet/frontend-project-lvl1/src/repetitive functions.js';


const progression = (x, y) => {
  const arrprog = [x];
  for (let i = 1; i <= 10; i += 1) {
    const numbermax = arrprog[arrprog.length - 1];
    arrprog.push(numbermax + y);
  }
  return arrprog;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const progres = progression(randomnumber(1, 100), randomnumber(1, 100));
    const ix = randomnumber(1, 10);
    const answer = progres[ix];
    progres[ix] = '..';
    console.log(`Question: ${progres}`);
    const result = readlineSync.question('Your answer: ');
    if (Number(result) === answer) {
      console.log('Correct!');
    } else {
      return console.log(`"${result}" is wrong answer ;(. Correct answer was "${answer}" .\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
game();
