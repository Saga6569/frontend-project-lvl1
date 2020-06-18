import readlineSync from 'readline-sync';
import  calc  from '../bin/brain-calc.js';
import  isEven  from '../bin/brain-even.js';

export const randomNumber = (down, up) => {
  down = Math.ceil(down);
  up = Math.floor(up);
  return Math.floor(Math.random() * (up - down + 1)) + down;
};

export const numberDividers = (value) => { // функция принимает число и возвращает массив делителей числа
  const result = [];
  for (let i = 1; i <= value; i += 1) {
    if (value % i === 0) {
      result.push(i);
    }
  }
  return result;
};

const gameDefinition = (gameName) => {
  if (gameName === 'gameCalc') {
    return calc();
  } else if (gameName === 'gameEven') {
    return isEven();
  } else if (gameName === 'gamGcd') {
    return matchDividers();
  } else if (gameName === 'gamePrime') {
    return prim();
  } else if (gameName === 'gameProgression') {
    return progression();
  }
};

export const gameEngine = (gameСonditions ,gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? : ');
  console.log(`Hello ${name}!`);
  console.log(gameСonditions);
  for (let i = 1; i <= 3; i += 1) {
    let answer = gameName();
    console.log(answer[1]);
    const userResponse = String((readlineSync.question('Your answer: ')));
    if (String(answer[0]) === userResponse) {
      console.log('Correct!');
    } else {
      return console.log(`"${userResponse}" is wrong answer ;(. Correct answer was "${answer[0]}" .\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
