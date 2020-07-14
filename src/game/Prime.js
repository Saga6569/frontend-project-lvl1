import randomNumber from '../utility/source.js';

export const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const gamePrime = () => {
  const value = randomNumber(1, 100);
  let answer = '';
  const question = value;
  if (isPrime(value) === true) {
    answer = 'yes';
  }
  answer = 'no';
  return [answer, question];
};
