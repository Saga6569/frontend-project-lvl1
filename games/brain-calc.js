#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomnumber, deliteli } from '/home/dima/hexlet/frontend-project-lvl1/src/repetitive functions.js';
 
const calc = (x, y) => {    // функция принимает 2 числа  и возвращает массив : результат и строку 
  const str = '*-+';
  const strmax = str.length - 1;
  const i = randomnumber(0, strmax);
    if (str[i] === '*' ) {
    const acalc = [(x * y), `${x} * ${y}`]
    return acalc
  } else if (str[i] === '+') {
    const acalc = [(x + y), `${x} + ${y}`]
    return acalc
  } else if (str[i] === '-' ) {
    const acalc = [(x - y), `${x} - ${y}`]
    return  acalc
  }
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? :');
  console.log(`Hello ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const answer = calc(randomnumber(1, 100), randomnumber(1, 100));
    console.log(`Question: ${answer[1]}`);
    const result = readlineSync.question('Your answer: ');
    if (Number(result) === answer[0]) {
      console.log('Correct!');
    } else {
      return console.log(`"${result}" is wrong answer ;(. Correct answer was "${answer[0]}" .\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
game();
