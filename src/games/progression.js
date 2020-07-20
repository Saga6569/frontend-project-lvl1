import { randomNumber } from '../source.js';

export const description = 'What number is missing in the progression?';

export const progression = () => {
  const result = {};
  const value1 = randomNumber(1, 100);
  const arrProgression = [];
  const progressionLength = 10;
  for (let i = 1; i <= progressionLength; i += 1) {
    const numberMax = value1 * i;
    arrProgression.push(numberMax);
  }
  const positionInProgression = randomNumber(0, 9);
  result.answer = arrProgression[positionInProgression];
  arrProgression[positionInProgression] = '..';
  result.question = arrProgression.join('  ');
  return result;
};
