import { randomNumber } from '../utils.js';

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
  const question = randomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { answer, question };
};
