import { randomNumber } from '../source.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export const gameEven = () => {
  const result = {};
  result.question = randomNumber(1, 100);
  result.answer = (result.question % 2 === 0) ? 'yes' : 'no';
  return result;
};
