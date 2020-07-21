import { randomNumber } from '../utils.js';

export const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const gameGcd = () => {
  const first = randomNumber(1, 100);
  const second = randomNumber(1, 100);
  const answer = gcd(first, second);
  const question = `${first} ${second}`;
  return { answer, question };
};
