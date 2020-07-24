import { randomNumber } from '../utils.js';
import runEngine from '../index.js';

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

export const generateRound = () => {
  const operations = ['-', '+', '*'];
  const indexOperator = randomNumber(0, operations.length - 1);
  const first = randomNumber(1, 100);
  const second = randomNumber(1, 100);
  const answer = String(calc(operations[indexOperator], first, second));
  const question = `${first} ${operations[indexOperator]} ${second}`;
  return { answer, question };
};

export default () => runEngine(description, generateRound);
