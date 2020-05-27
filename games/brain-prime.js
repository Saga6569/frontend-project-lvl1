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

const deliteli = (x) => {
  const xdel = [];
  for (let i = 1; i <= x; i += 1) {
    if (x % i === 0) {
      xdel.push(i);
    }
  }
  return xdel;
};

const prim = (arr) => {
  if (arr.length - 1 !== 1) {
    return 'no';
  }
  return 'yes';
};

const game = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const quast = randomnumber(1, 100);
    const answer = prim(deliteli(quast));
    console.log(`Question: ${quast}`);
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
