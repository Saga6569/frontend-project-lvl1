import { randomNumber } from '../source.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const gamePrime = () => {
  const result = {};
  result.question = randomNumber(1, 100);
  result.answer = (isPrime(result.question)) ? 'yes' : 'no';
  return result;
};
