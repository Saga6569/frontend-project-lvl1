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

const gamecalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const x1 = randomnumber(1, 100);
    const x2 = randomnumber(1, 100);
    const str = '+-*';
    const zn = str[randomnumber(0, 2)];
    const qus = ('Question:' + x1 + zn + x2);
    if (zn === '+') {
      const answer = (x1 + x2);
      console.log(qus);
      const result = readlineSync.question('Your answer: ');
      if (answer === Number(result)) {
        console.log('Correct!');
      } else {
        return console.log(`"${result}" is wrong answer ;(. Correct answer was "${answer}" .\nLet's try again, ${name}!`);
      }
    } else if (zn === '-') {
      const answer = (x1 - x2);
      console.log(qus);
      const result = readlineSync.question('Your answer: ');
      if (answer === Number(result)) {
        console.log('Correct!');
      } else {
        return console.log(`"${result}" is wrong answer ;(. Correct answer was "${answer}" .\nLet's try again, ${name}!`);
      }
    } else if (zn === '*') {
      const answer = (x1 * x2);
      console.log(qus);
      const result = readlineSync.question('Your answer: ');
      if (answer === Number(result)) {
        console.log('Correct!');
      } else {
        return console.log(`"${result}" is wrong answer ;(. Correct answer was "${answer}" .\nLet's try again, ${name}!`);
      }
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
gamecalc();
