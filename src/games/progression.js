import randomNumber from '../utility/source.js';

export const description = 'What number is missing in the progression?';

export const progression = () => {
  const value1 = randomNumber(1, 100);
  const arrProgression = [];
  const progressionLength = 10;
  for (let i = 1; i <= progressionLength; i += 1) {
    const numberMax = value1 * i;
    arrProgression.push(numberMax);
  }
  const positionInProgression = randomNumber(0, 9);
  const answer = arrProgression[positionInProgression];
  arrProgression[positionInProgression] = '..';
  const question = arrProgression.join('  ');
  return [answer, question];
};
