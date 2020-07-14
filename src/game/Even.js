import randomNumber from '../utility/source.js';

export const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (value) => {
  if (value % 2 === 0) {
    return true;
  }
  return false;
};

export const gameEven = () => {
  const value = randomNumber(1, 100);
  let answer = '';
  const question = value;
  if (isEven(value) === true) {
    answer = 'yes';
  }
  answer = 'no';
  return [answer, question];
};
