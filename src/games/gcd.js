import randomNumber from '../utility/source.js';

export const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const gameGcd = () => {
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  const answer = gcd(value1, value2);
  const question = `${value1} ${value2}`;
  return [answer, question];
};
