import { randomNumber } from '../source.js';

export const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const gameGcd = () => {
  const result = {};
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  result.answer = gcd(value1, value2);
  result.question = `${value1} ${value2}`;
  return result;
};
