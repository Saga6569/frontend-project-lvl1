import { randomNumber } from '../utils.js';

import runEngine from '../index.js';

export const description = 'What number is missing in the progression?';

const progressionLength = 10;

export const generateRound = () => {
  const first = randomNumber(1, 100);
  const progression = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    const current = first * i;
    progression.push(current);
  }
  const hiddenNumberIndex = randomNumber(0, progressionLength - 1);
  const answer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join('  ');
  return { answer, question };
};
export default () => runEngine(description, generateRound);
