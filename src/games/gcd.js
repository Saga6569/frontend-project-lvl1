import { randomNumber } from '../utils.js';

import runEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const generateRound = () => {
  const first = randomNumber(1, 100);
  const second = randomNumber(1, 100);
  const answer = String(gcd(first, second));
  const question = `${first} ${second}`;
  return { answer, question };
};

export default () => runEngine(description, generateRound);
