import { randomNumber } from '../utils.js';

export const description = 'What is the result of the expression?';

const calc = (operator, first, second) => {
  let result = 0;
  switch (operator) {
    case '-':
      result = first - second;
      break;
    case '+':
      result = first + second;
      break;
    case '*':
      result = first * second;
      break;
    default:
      console.log('error');
  }
  return result;
};

export const gameCalc = () => {
  const operations = ['-', '+', '*'];
  const indexOperator = randomNumber(0, 2);
  const first = randomNumber(1, 100);
  const second = randomNumber(1, 100);
  const answer = calc(operations[indexOperator], first, second);
  const question = `${first} ${operations[indexOperator]} ${second}`;
  return { answer, question };
};
