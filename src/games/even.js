import { randomNumber } from '../utils.js';
import runEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export const generateRound = () => {
  const question = randomNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return { answer, question };
};

export default () => runEngine(description, generateRound);
