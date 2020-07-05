export const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const brainCalc = 'What is the result of the expression?';

const calculatorAnswer = (value1, value2) => {
  const result = [value1 + value2, value1 - value2, value1 * value2];
  return result;
};

const calculatorQuestion = (value1, value2) => {
  const result = [`${value1} + ${value2}`, `${value1} - ${value2}`, `${value1} * ${value2}`];
  return result;
};

export const calculator = () => {
  const result = [];
  const act = randomNumber(0, 2);
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  const answer = calculatorAnswer(value1, value2);
  const question = calculatorQuestion(value1, value2);
  result.push(answer[act], question[act]);
  return result;
};

export const brainEven = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (value) => {
  if (value % 2 === 0) {
    return true;
  }
  return false;
};

export const resultIsEven = () => {
  const value = randomNumber(1, 100);
  const result = isEven(value);
  if (result === true) {
    return ['yes', value];
  }
  return ['no', value];
};

export const brainGcd = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const resultGcd = () => {
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  return [gcd(value1, value2), `${value1} ${value2}`];
};

export const brainPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const resultIsPrime = () => {
  const value = randomNumber(1, 100);
  const result = isPrime(value);
  if (result === true) {
    return ['yes', value];
  }
  return ['no', value];
};

export const brainProgression = 'What number is missing in the progression?';

export const progression = () => {
  const value1 = randomNumber(1, 100);
  const value2 = randomNumber(1, 100);
  const arrprogression = [value1];
  const progressionLength = 10;
  let answer = 0;
  for (let i = 1; i <= progressionLength; i += 1) {
    const numberMax = arrprogression[arrprogression.length - 1];
    arrprogression.push(numberMax + value2);
  }
  const positionInProgression = randomNumber(1, 10);
  answer = arrprogression[positionInProgression];
  arrprogression[positionInProgression] = '..';
  return [answer, arrprogression.join('  ')];
};