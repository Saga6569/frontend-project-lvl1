#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? :');
console.log(`Hello ${name}!`);


const randomnumber = (down, up) => {
  down = Math.ceil(down);
  up = Math.floor(up);
  return Math.floor(Math.random() * (up - down + 1)) + down;
};

const calc = (x, y, z) => {
  if (z === '*') {
    return x * y;
  } else if (z === '+') {
    return x + y;
  } else if (z === '-') {
    return x - y;
  }
};
const znk = (x) => {
  const xmax = x.length - 1;
  const i = randomnumber(0, xmax);
  return x[i];
};

const game = () => {
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const value1 = randomnumber(1, 100);
    const value2 = randomnumber(1, 100);
    const znak = znk('+-*');
    const answer = calc(value1, value2, znak);
    const expression = `${value1} ${znak} ${value2}`;
    console.log(`Question: ${expression}`);
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
