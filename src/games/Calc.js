import randomNumber from '../utility/source.js';

export const description = 'What is the result of the expression?';

const act = (value1, value2, operations) => {
  let result = 0;
  switch (operations) {
    case '-':
      result = value1 - value2;
      break;
    case '+':
      result = value1 + value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    default:
      console.log('error');
  }
  return result;
};

export const gameCalc = () => {
  const operations = ['-', '+', '*'];
  const indexOperator = randomNumber(0, 2);
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  const answer = act(value1, value2, operations[indexOperator]);
  const question = `${value1} ${operations[indexOperator]} ${value2}`;
  return [answer, question];
};
