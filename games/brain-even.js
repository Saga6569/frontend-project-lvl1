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

const gam = () => {
  const quas = 'Question: ';
  const corr = 'Correct!';
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 1; i <= 3; i += 1) {
    const number = randomnumber(1, 100);
    let result = '';
    if (number % 2 === 0) {
      result += 'yes';
    } else {
      result += 'no';
    }
    console.log(quas + String(number));
    const vopros = readlineSync.question('Your answer: ');
    if (vopros === result) {
      console.log(corr);
    } else {
      return console.log(`"${vopros}" is wrong answer ;(. Correct answer was "${result}" .\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
gam();
