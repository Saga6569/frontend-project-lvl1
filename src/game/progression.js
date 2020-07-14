import randomNumber from '../utility/source.js';

export const rulesOfTheGame = 'What number is missing in the progression?';

export const gameProgression = () => {
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  const arrprogression = [value1];
  const progressionLength = 10;
  for (let i = 1; i <= progressionLength; i += 1) {
    const numberMax = arrprogression[arrprogression.length - 1];
    arrprogression.push(numberMax + value2);
  }
  const positionInProgression = randomNumber(1, 10);
  const answer = arrprogression[positionInProgression];
  arrprogression[positionInProgression] = '..';
  const question = arrprogression.join('  ');
  return [answer, question];
};
