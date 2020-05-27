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

const wath = (x) => {
  if (x % 2 === 0) {
   return 'yes';
  }
  return 'no';
};

const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 1; i <= 3; i += 1) {
    const value = randomnumber(1, 100);
    const answer = wath(value);
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










