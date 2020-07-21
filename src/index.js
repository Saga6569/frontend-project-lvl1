import readlineSync from 'readline-sync';

const gameEngine = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? : ');
  console.log(`Hello ${name}!`);
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const { answer, question } = game();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(answer) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}" .`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
