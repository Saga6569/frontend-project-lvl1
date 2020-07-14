import randomNumber from '../utility/source.js';

export const rulesOfTheGame = 'What is the result of the expression?';

export const gameCalc = () => {
  let answer = 0;
  let question = '';
  const operations = ['-', '+', '*'];
  const indexOperator = randomNumber(0, 2);
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  switch (operations[indexOperator]) {
    case '-':
      answer = value1 - value2;
      question = `${value1} - ${value2}`;
      break;
    case '+':
      answer = value1 + value2;
      question = `${value1} + ${value2}`;
      break;
    case '*':
      answer = value1 - value2;
      question = `${value1} - ${value2}`;
      break;
    default:
      console.log('eror');
  }
  return [answer, question];
};
