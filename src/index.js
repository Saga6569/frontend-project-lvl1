import readlineSync from 'readline-sync';

export const randomNumber = (down, up) => {
  down = Math.ceil(down);
  up = Math.floor(up);
  return Math.floor(Math.random() * (up - down + 1)) + down;
};

export const deliteli = (value) => { // функция принимает число и возвращает массив делителей числа
  const result = [];
  for (let i = 1; i <= value; i += 1) {
    if (value % i === 0) {
      result.push(i);
    }
  }
  return result;
};

export const coincidences = () => { // функция верет наибольшуу значение функции delitel и значения
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  const arr1 = deliteli(value1);
  const arr2 = deliteli(value2);
  const values = `${value1} ${value2}`;
  const result = [];
  const longarr1 = arr1.length - 1;
  for (let i = 0; i <= longarr1; i += 1) {
    if (arr2.includes(arr1[i]) === true) {
      result.push(arr1[i]);
    }
  }
  return [result[result.length - 1], values];
};

export const prim = () => { // принимает массив  и возвращает 'no' если елс больше 2 элементов
  const value = randomNumber(1, 100);
  const arr = deliteli(value);
  if ((arr.length - 1 !== 1) === true) {
    return ['no', value];
  }
  return ['yes', value];
};

export const greetingName = (gameСonditions, name) => {
  console.log(`Hello ${name}!`);
  console.log(gameСonditions);
};

export const greeting = 'Welcome to the Brain Games!';
export const brainCalc = 'What is the result of the expression?';
export const brainEven = 'Answer "yes" if the number is even, otherwise answer "no"';
export const brainGcd = 'Find the greatest common divisor of given numbers.';
export const brainPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const brainProgression = 'What number is missing in the progression?';

export const calc = () => {
  let gameResponse = 0;
  let messeg = '';
  const str = '*-+';
  const i = randomNumber(0, 2);
  const x = randomNumber(1, 100);
  const y = randomNumber(1, 100);
  if (str[i] === '*') {
    messeg += (`${x} * ${y}`);
    gameResponse = x * y;
  } else if (str[i] === '+') {
    messeg += (`${x} + ${y}`);
    gameResponse = x + y;
  } else if (str[i] === '-') {
    messeg += (`${x} - ${y}`);
    gameResponse = x - y;
  }
  return [gameResponse, messeg];
};

export const isEven = () => { // функция проверяет  число  на  четность
  const value = randomNumber(1, 100);
  if ((value % 2 === 0) === true ) {
    return ['yes', value];
  }
  return ['no', value];
};

export const progression = () => {
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  const arrprog = [value1];
  const longProgress = 10;
  let gameResponse = 0;
  for (let i = 1; i <= longProgress; i += 1) {
    const numbermax = arrprog[arrprog.length - 1];
    arrprog.push(numbermax + value2);
  }
  const ix = randomNumber(1, 10);
  gameResponse = arrprog[ix];
  arrprog[ix] = '..';
  return [gameResponse, arrprog.join('  ')];
};

export const gameDefinition = (gameName) => {
  if (gameName === 'gameCalc') {
    return calc();
  } else if (gameName === 'isEven') {
    return isEven();
  } else if (gameName === 'gamGcd') {
    return coincidences();
  } else if (gameName === 'gamePrime') {
    return prim();
  } else if (gameName === 'gameProgression') {
    return progression();
  }
};

export const gameEngine = (gameName, name) => {
  for (let i = 1; i <= 3; i += 1) {
    const answer = gameDefinition(gameName);
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
