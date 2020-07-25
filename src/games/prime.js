import { randomNumber } from '../utils.js';
import runEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const generateRound = () => {
  const question = randomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { answer, question };
};

export default () => runEngine(description, generateRound);
