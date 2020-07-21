import { randomNumber } from '../utils.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export const gameEven = () => {
  const question = randomNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return { answer, question };
};
